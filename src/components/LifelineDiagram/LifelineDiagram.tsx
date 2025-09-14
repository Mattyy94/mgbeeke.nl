import React, { useEffect, useState } from 'react';
import lifedata from '../../assets/lifedata.json';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer
} from 'recharts';
import styles from './LifelineDiagram.module.css';
import classnames from 'classnames';
import { typeColors } from './typeColors';

type LifelineEvent = {
  year: number;
  event: string;
  description: string;
  type: 'education' | 'work' | 'prive';
  rating: number;
};

const cx = classnames.bind(styles);

// Custom Dot component with tooltip on hover
type CustomDotProps = {
  cx: number;
  cy: number;
  stroke: string;
  payload: any;
  dataKey: string;
  value: number;
  data: LifelineEvent[];
};

export const LifelineDiagram = () => {
  const [data, setData] = useState<LifelineEvent[]>([]);
  // Tooltip state
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    event: LifelineEvent | null;
  } | null>(null);

  useEffect(() => {
    setData((lifedata as unknown as LifelineEvent[]).map(e => ({
      ...e,
      type: e.type.toLowerCase() as 'education' | 'work' | 'prive',
    })));
  }, []);

  // Build a unified array for the chart: one entry per year, with ratings for each type
  const minYear = 2012;
  const maxYear = 2030;
  const chartData = [];
  for (let year = minYear; year <= maxYear; year++) {
    const yearEvents = data.filter((d) => d.year === year);
    chartData.push({
      year,
      education: yearEvents.find((e) => e.type === 'education')?.rating ?? undefined,
      work: yearEvents.find((e) => e.type === 'work')?.rating ?? undefined,
      prive: yearEvents.find((e) => e.type === 'prive')?.rating ?? undefined,
      // Optionally, you can add event/description if you want to show in tooltip
      educationEvent: yearEvents.find((e) => e.type === 'education') || null,
      workEvent: yearEvents.find((e) => e.type === 'work') || null,
      priveEvent: yearEvents.find((e) => e.type === 'prive') || null,
    });
  }

  // Custom Dot component with external tooltip
  const CustomDot = ({ cx, cy, stroke, payload, dataKey, value, data }: CustomDotProps) => {
    if (value === undefined) return null;
    // Find the event for this dot
    const event = payload && dataKey && value != null
      ? data.find((e: LifelineEvent) => e.year === payload.year && e.type === dataKey)
      : null;
    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={5}
          stroke={stroke}
          strokeWidth={2}
          fill="#222"
          style={{ cursor: 'pointer' }}
          onMouseEnter={() => {
            if (event) setTooltip({ x: cx, y: cy, event });
          }}
          onMouseLeave={() => setTooltip(null)}
        />
      </g>
    );
  };

  return (
    <div style={{ width: '100%', height: 400, position: 'relative' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" domain={[minYear, maxYear]} tickCount={maxYear - minYear + 1} />
          <YAxis domain={[1, 10]} tickCount={10} />
          {/* No default Tooltip */}
          <Legend />
          {['education', 'work', 'prive'].map((type) => (
            <Line
              key={type}
              type="monotone"
              dataKey={type}
              name={type.charAt(0).toUpperCase() + type.slice(1)}
              stroke={typeColors[type]}
              dot={(props) => <CustomDot {...props} dataKey={type} data={data} />}
              connectNulls
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      {/* Absolutely positioned tooltip */}
      {tooltip && tooltip.event && (
        <div
          className={cx(styles.tooltip)}
          style={{
            left: tooltip.x,
            top: tooltip.y - 80,
          }}
        >
          <strong
            style={{
              color: typeColors[tooltip.event.type],
            }}
          >
            {tooltip.event.event}
          </strong>
          <div>{tooltip.event.description}</div>
        </div>
      )}
    </div>
  );
};