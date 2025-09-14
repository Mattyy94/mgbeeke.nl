import React, { useState } from 'react';
import { LifelineDiagram, LifeLineLegenda } from '../components/LifelineDiagram';
import styles from './Lifeline.module.css';
import classnames from 'classnames';

const cx = classnames.bind(styles);

const PASSWORD_B64 = 'R3JvZWl2b29ydWl0'; // 'Groeivooruit' base64

export const LifelineView = () => {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const decoded = atob(PASSWORD_B64);
    if (input === decoded) {
      setUnlocked(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (!unlocked) {
    return (
      <div className={cx(styles.base)}>
        <h2>Lifeline</h2>
        <form onSubmit={handleSubmit} style={{ margin: '2rem 0' }}>
          <label>
            Enter password to view this page:<br />
            <input
              type="password"
              value={input}
              onChange={e => setInput(e.target.value)}
              style={{ marginTop: 8, padding: 4 }}
            />
          </label>
          <button type="submit" style={{ marginLeft: 8, padding: '4px 12px' }}>Unlock</button>
        </form>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    );
  }

  return (
    <div className={cx(styles.base)}>
      <h2>Lifeline</h2>
      <LifelineDiagram />
      <LifeLineLegenda />
    </div>
  );
};