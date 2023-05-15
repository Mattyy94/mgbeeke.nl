import React from 'react';
import styles from './Socials.module.css';
import classnames from 'classnames';
import {ReactComponent as Instagram} from '../../assets/socials/instagram.svg';
import {ReactComponent as Linkedin} from '../../assets/socials/linkedin.svg';
import {ReactComponent as Mail} from '../../assets/socials/mail.svg'

const cx = classnames.bind(styles)

export const Socials = () => {
  return (
    <div className={cx(styles.base)}>
      <h2>How to reach me?</h2>
      <div className={cx(styles.wrapper)}>
        <a className={cx(styles.socialButton, styles.mail)}>
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
          <a className={cx(styles.socialButton)} href="https://www.instagram.com/mbnatureshots/" target="_blank"> 
            <strong>@mbnatureshots</strong>
            <Instagram className={cx(styles.icon)}/>
          </a>
        </div>
      </div>
    </div>
  )
}
