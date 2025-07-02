import React from 'react';
import styles from './HomeView.module.css';
import classnames from 'classnames';
import { Socials, AboutMe } from '../components/';
import { Portfolio } from '../components/Portfolio';

const cx = classnames.bind(styles);

export const HomeView = () => {
  return (
    <div className={cx(styles.base)}>
      <div className={cx(styles.typewriter)}>
        <h1>Hello world</h1>
      </div>
      <h3>Welcome on the personal site of Matthijs Beeke or Matty for friends</h3>
      <AboutMe />
      <Socials />
      <Portfolio />
    </div>
  );
};
