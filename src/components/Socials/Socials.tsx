import React from 'react';
import styles from './Socials.module.css';
import classnames from 'classnames';

const cx = classnames.bind(styles)

export const Socials = () => {
  const test = 'hoi'
  return (
    <div className={cx(styles.base)}>
      <h3>Socials</h3>
      <div>Mail@</div>
      <div>
        LinkedIn
      </div>
      <div>
        Instagram
        (photography)
      </div>
    </div>
  )
}
