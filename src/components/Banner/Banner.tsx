import React from 'react';
import styles from './Banner.module.css';
import classnames from 'classnames';

const cx = classnames.bind(styles);

export const Banner = () => {
  return (
    <div className={cx(styles.base)} />
  );
};
