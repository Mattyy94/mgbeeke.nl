import React from 'react';
import styles from './Socials.module.css';
import classnames from 'classnames';
import {ReactComponent as Instagram} from '../../assets/socials/instagram.svg';
import {ReactComponent as Linkedin} from '../../assets/socials/linkedin.svg';
import {ReactComponent as Mail} from '../../assets/socials/mail.svg';
import {ReactComponent as Github} from '../../assets/socials/github.svg';

const cx = classnames.bind(styles);

export const Socials = () => {
  return (
    <div className={cx(styles.base)}>
      <h2>How to reach me?</h2>
      <div className={cx(styles.wrapper)}>
        <a className={cx(styles.socialButton, styles.mail)} href='mailto:hello@emgbeeke.nl?subject=Please%20Remove%20me%20[SPAM%20PREVENTION]'>
          <strong><span className={cx(styles.blockspam)} aria-hidden="true">PLEASE GO AWAY!</span> Hello@{/* sdfjsdhfkjypcs -*/}mgbeeke.nl</strong>
          <Mail className={cx(styles.icon, styles.mailIcon)} />
        </a>   
        <div>
          <a className={cx(styles.socialButton)} href="https://www.linkedin.com/in/matthijs-beeke/?" target="_blank">
            <strong>@matthijs-beeke</strong>
            <Linkedin className={cx(styles.icon)}/>
          </a>
        </div>
        <div>
          <a className={cx(styles.socialButton)} href="https://github.com/Mattyy94" target="_blank"> 
            <strong>@Mattyy94</strong>
            <Github className={cx(styles.icon)}/>
          </a>
        </div>
        <div>
          <a className={cx(styles.socialButton)} href="https://www.instagram.com/mbnatureshots/" target="_blank"> 
            <strong>@mbnatureshots</strong>
            <Instagram className={cx(styles.icon)}/>
          </a>
        </div>
      </div>
    </div>
  );
};