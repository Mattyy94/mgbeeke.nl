import React, { useEffect, useState } from 'react';
import lifedata from '../../assets/lifedata.json';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Dot
} from 'recharts';
import styles from './LifelineDiagram.module.css';
import classnames from 'classnames';

const typeColors: { [key: string]: string } = {
  education: 'green',
  work: 'blue',
  prive: 'orange',
};

type LifelineEvent = {
  year: number;
  event: string;
  description: string;
  type: 'education' | 'work' | 'prive';
  rating: number;
};

const cx = classnames.bind(styles);

const LifelineDiagram = () => {
  const [data, setData] = useState<LifelineEvent[]>([]);

  useEffect(() => {
    setData((lifedata as unknown as LifelineEvent[]).map(e => ({
      ...e,
      type: e.type as 'education' | 'work' | 'prive',
    })));
  }, []);

  // Group data by type for separate lines
  const grouped: { [key: string]: (LifelineEvent | { year: number; rating: null })[] } = {
    education: [],
    work: [],
    prive: [],
  };
  for (let year = 2010; year <= 2030; year++) {
    const yearData = data.filter((d) => d.year === year);
    ['education', 'work', 'prive'].forEach((type) => {
      const event = yearData.find((d) => d.type === type);
      grouped[type].push(event ? { ...event } : { year, rating: null });
    });
  }

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={Array.from({ length: 21 }, (_, i) => ({ year: 2010 + i }))}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" domain={[2010, 2030]} tickCount={21} />
          <YAxis domain={[1, 10]} tickCount={10} />
          <Tooltip content={({ active, payload }: { active?: boolean; payload?: any[] }) => {
            if (active && payload && payload.length) {
              const event = payload[0].payload;
              if (event && event.event) {
                return (
                  <div className={cx(styles.tooltip)}>
                    <strong>{event.event}</strong>
                    <div>{event.description}</div>
                  </div>
                );
              }
            }
            return null;
          }} />
          <Legend />
          {['education', 'work', 'prive'].map((type) => (
            <Line
              key={type}
              type="monotone"
              dataKey="rating"
              data={grouped[type]}
              name={type.charAt(0).toUpperCase() + type.slice(1)}
              stroke={typeColors[type]}
              dot={{
                stroke: typeColors[type],
                strokeWidth: 2,
                r: 5,
                onClick: (e: any, payload: any) => {
                  // Optionally handle click
                },
              }}
              connectNulls
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LifelineDiagram; 