import React, { useState, useEffect } from 'react';
import styles from './test.module.css';
import classnames from 'classnames';

const cx = classnames.bind(styles);

interface ScrollEffectProps {
  sections: JSX.Element[];
}

export const Test = ({ sections }: ScrollEffectProps) => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleClick = (direction: 'up' | 'down') => {
    setCurrentSection((prevSection) =>
      direction === 'up'
        ? Math.max(prevSection - 1, 0)
        : Math.min(prevSection + 1, sections.length - 1)
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        handleClick('up');
      } else if (event.key === 'ArrowDown') {
        handleClick('down');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollContainerStyle = {
    transform: `translateY(-${currentSection * 100}%)`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <div className={cx(styles.scrollContainer, styles.test)} style={scrollContainerStyle}>
      {sections.map((section, index) => (
        <section
          key={index}
          // @ts-ignore
          style={{'--index': index}}
          className={cx(currentSection === index ? 'visible' : '')}>
          {section}
        </section>
      ))}
      <div className={cx(styles.buttonContainer)}>
        <button className={cx(styles.button)} onClick={() => handleClick('down')}>
          Down
        </button>
      </div>
    </div>
  );
};
