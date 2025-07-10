import React from 'react';
import styles from './AboutMe.module.css';
import classnames from 'classnames';

const cx = classnames.bind(styles);

export const AboutMe = () => {

  const getYears = (input: string) => {
    const parsedBirthday = new Date(input);
    const currentDate = new Date();
    const ageDiff = currentDate.getTime() - parsedBirthday.getTime();
    const ageDate = new Date(ageDiff); // Milliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const age = getYears('09/24/1994');
  const married = getYears('01/27/2020');

  return (
    <section className={cx(styles.base)}>
      <article className={cx(styles.item)}>
        <h3>About me</h3>
        <span>
        Hey there! I'm Matthijs, and i'm {age}. Been happily married to Astrid for {married} years.
        Since May 2025, we've also been parents to our son, Gijs.
          <br /><br />
        We live in Nunspeet, together with our pets,
        The best part? The forest is just a short 5-minute stroll away from our doorstep.
        It's like having nature's playground right in our backyard!
        </span>
        <span>
        In my free time, I have a few hobbies that keep me entertained.
        I love capturing moments through photography, going on hiking adventures,
        experimenting with cooking and trying out new recipes.
        </span>
      </article>
      <article className={cx(styles.item)}>
        <h3>Career</h3>
        <span>
        In 2016, I started my career as fresh graduate i landed a role at Olyslager,
        where I dived into front-end development. At Olyslager, we crafted oil advisors for well-known brands,
          <br /><br />
        One of the exciting challenges I encountered was the migration from a colossal monolith/legacy system to micro frontends,
        utilizing the power of Vue.js and TypeScript.
        </span>
        <span>  
          In 2021, I took my talents to Brainstud, where I continued as a front-end developer.
          Here, I'm working on an blended learning platform, shaping the future of education.
          <br/> <br />
          In 2022, we completed a remarkable transformation,
          transitioning from a scattered multi-repo source to a unified monolith architecture powered by Next.js (React + TypeScript).
        </span>
      </article>
    </section>
  );
};
