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
        Hey there! I'm Matthijs, and {age} years old. I've been happily married to my lovely wife, Astrid, for {married} amazing years.
        Oh, and did I mention we have a bunch of adorable pets? 
          <br /><br />
        Our home is nestled in the charming village of Nunspeet,
        right in the heart of the beautiful Veluwe region.
        The best part? The forest is just a short 5-minute stroll away from our doorstep.
        It's like having nature's playground right in our backyard!
        </span>
        <span>
        In my free time, I have a few hobbies that keep me entertained.
        I love capturing moments through photography, going on hiking adventures with my dog (and my wife, of course),
        experimenting with cooking and trying out new recipes, and diving deep into the exciting world of tech and coding.
        </span>
      </article>
      <article className={cx(styles.item)}>
        <h3>Career</h3>
        <span>
        Back in 2016, I embarked on my journey as a Mediadeveloper graduate and landed a role at Olyslager,
        where I dived into the world of front-end development. At Olyslager, we crafted oil advisors for well-known brands,
        unleashing my creativity and coding skills.
          <br /><br />
        One of the exciting challenges I encountered was the migration from a colossal monolith/legacy system to nimble micro frontends,
        utilizing the power of Vue.js and TypeScript.
        </span>
        <span>  
          In 2021, I took my talents to Brainstud, where I continued my adventure as a front-end developer.
          Here, I'm working on an awe-inspiring blended learning platform, shaping the future of education.
          <br/> <br />
          Recently, in 2022, we completed a remarkable transformation,
          transitioning from a scattered multi-repo source to a unified monolith architecture powered by Next.js (React + TypeScript).
          <br /><br />
          It's a thrilling ride at Brainstud, pushing the boundaries of technology and paving the way for a seamless learning experience!
        </span>
      </article>
    </section>
  );
};
