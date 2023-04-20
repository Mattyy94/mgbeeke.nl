import React from 'react';
import styles from './Banner.module.css';
import classnames from 'classnames';
import bannerImage from '../../assets/banner-image.png';

const cx = classnames.bind(styles)

export const Banner = () => {
  const test = 'hoi'
  return (
    <div className={cx(styles.base)} />
  )
}
