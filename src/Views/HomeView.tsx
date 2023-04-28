import React from 'react';
import styles from './HomeView.module.css';
import classnames from 'classnames';
import { Socials } from '../components/Socials';

const cx = classnames.bind(styles)

export const HomeView = () => {
  const test = 'hoi'
  return (
    <div className={cx(styles.base)}>
      <div className={cx(styles.typewriter)}>
        <h1>Hello world</h1>
      </div>
        <h3>Welcome at the personal site of Matthijs Beeke or Matty for friends</h3>
        <div className={cx(styles.about)}>
          <div className={cx(styles.item)}>
            <h4>About me</h4>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, adipisci amet veniam sed velit consec
            </span>
          </div>
          <div className={cx(styles.item)}>
            <h4>Career</h4>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, adipisci amet veniam sed velit consec
            </span>
          </div>
        </div>
        <Socials />
      </div>
  )
}
