import React from 'react';
import lifedata from '../../assets/lifedata.json';
import styles from './LifelineDiagram.module.css';
import { typeColors } from './typeColors';
import classnames from 'classnames';

const cx = classnames.bind(styles);

// Type definition for lifedata
 type LifelineEvent = {
  year: number;
  event: string;
  description: string;
  type: 'education' | 'work' | 'prive' | string;
  rating: number;
};
export const LifeLineLegenda = () => {
  // Group events by year
  const groupByYear = (data: LifelineEvent[]) => {
    const grouped: { [year: number]: LifelineEvent[] } = {};
    data.forEach(e => {
      if (!grouped[e.year]) grouped[e.year] = [];
      grouped[e.year].push(e);
    });
    return grouped;
  };

  // Normalize types to lowercase
  const data: LifelineEvent[] = (lifedata as LifelineEvent[]).map(e => ({
    ...e,
    type: e.type.toLowerCase(),
  }));
  const grouped = groupByYear(data);
  const years = Object.keys(grouped).sort((a, b) => Number(a) - Number(b));

  // All years open by default
  const [openYears, setOpenYears] = React.useState<{ [year: string]: boolean }>(() => {
    const initial: { [year: string]: boolean } = {};
    years.forEach(year => { initial[year] = true; });
    return initial;
  });

  const toggleYear = (year: string) => {
    setOpenYears(prev => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <div className={cx(styles.legenda)}>
      <h3>Lifeline Legenda</h3>
      {years.map(year => (
        <div key={year} className={styles.legendaYear}>
          <button
            className={styles.legendaToggle}
            style={{
              borderColor: grouped[Number(year)][0]
                ? typeColors[grouped[Number(year)][0].type] || '#ccc'
                : '#ccc',
              color: grouped[Number(year)][0]
                ? typeColors[grouped[Number(year)][0].type] || '#222'
                : '#222',
            }}
            onClick={() => toggleYear(year)}
          >
            {openYears[year] ? '▼' : '▶'} {year}
          </button>
          {openYears[year] && (
            <ul>
              {grouped[Number(year)].map((event, idx) => (
                <li
                  key={idx}
                  className={styles.legendaItem}
                  style={{
                    borderLeft: `6px solid ${typeColors[event.type] || '#ccc'}`,
                  }}
                >
                  <strong style={{ color: typeColors[event.type] || '#222' }}>{event.event}</strong> <br />
                  <span><b>Description:</b> {event.description}</span><br />
                  <span><b>Type:</b> {event.type}</span><br />
                  <span><b>Rating:</b> {event.rating}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

