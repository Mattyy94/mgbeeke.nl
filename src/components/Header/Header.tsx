import React from 'react';
import styles from './Header.module.css';
import classnames from 'classnames';

const cx = classnames.bind(styles)

export const Header = () => {
  const test = 'hoi'
  return (
    <header className={cx(styles.base)}>
      <h1>Hello world</h1>
    </header>
  )
}
