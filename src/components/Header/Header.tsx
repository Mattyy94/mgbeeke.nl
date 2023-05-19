import React from 'react';
import styles from './Header.module.css';
import classnames from 'classnames';
import logo from '../../assets/logo-white.png';

const cx = classnames.bind(styles);

export const Header = () => {
  return (
    <header className={cx(styles.base)}>
      <img src={logo} className={cx(styles.logo)}/>
    </header>
  );
};
