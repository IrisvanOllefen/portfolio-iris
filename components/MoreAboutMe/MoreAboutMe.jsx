/* eslint-disable jsx-a11y/alt-text */

import classNames from 'classnames'

import Image from 'next/image'
import styles from './MoreAboutMe.module.css'

export default function MoreAboutMe() {
  return (
    <div className={styles.container}>
      <div className='section'>
        <h3>My name is Iris, it is good to meet you!</h3>
        <p>
          I started studying Communication and Multimedia Design at the
          University of Applied Science in Amsterdam in the fall of 2018 but my
          story started before that. I have always been known as a very creative
          person and also took coding classes in high school. Nobody was
          surprised that this was the type of higher education I decided to
          follow.
        </p>
        <p>
          My interest first was more towards graphic design, but soon I
          discovered how interesting user experience designing was. When the
          coding related classes started, I really started enjoying that too. In
          my third year of CMD I followed a half semester of coding classes and
          learned more parts of the full stack development. I know some things
          about the back end, and find it very interesting, but I know my power
          will be in front end development for now. I wish to learn more.
        </p>
        <p>
          As a designer, I think about the end user whilst designing and always
          keep them in mind. When you have me on your team, my way of working is
          often considered trial and error, but it all comes down to a good end
          product with a nice process behind it.
        </p>
        <Image src='/icons/chevrons-down.svg' width='30' height='30' />
      </div>
    </div>
  )
}
