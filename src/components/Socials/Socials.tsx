import React from 'react';
import styles from './Socials.module.css';
import classnames from 'classnames';
import Instagram from '../../assets/socials/instagram.svg';
import {ReactComponent as Linkedin} from '../../assets/socials/linkedin.svg';

// https://stackoverflow.com/questions/74720726/type-definition-for-vite-plugin-svgr/75818331#75818331
// https://dev.to/cassidoo/importing-svg-files-as-react-components-with-vite-l3n

// TODO fix svg loader

const cx = classnames.bind(styles)

export const Socials = () => {
  const test = 'hoi'
  return (
    <div className={cx(styles.base)}>
      <h2>How to reach me?</h2>
      <div className={cx(styles.wrapper)}>
        <div>
          <strong>mail me @</strong>
          <span className={cx(styles.mail)}>Hello@mgbeeke.nl</span>
          </div>
        <div>
          LinkedIn
          <Linkedin />
        </div>
        <div>
          Instagram
          (photography)
          <img width={40} height={40} src={Instagram} className={cx(styles.logo)} />
        </div>
      </div>
    </div>
  )
}
