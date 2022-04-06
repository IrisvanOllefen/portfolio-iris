/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Link from 'next/link'

import styles from './MyWorkCard.module.css'

export default function MyWorkCard() {
  return (
    <div className={styles.container}>
      <div className={styles['title-image-section']}>
        <h4>Novel Love</h4>
        <h5>Dating Application</h5>
        <h6>Front-end + Back-end</h6>
        <span className={styles.image}>
          <Image src='/products/novellove.jpg' width='300' height='200' />
        </span>
      </div>
      <div className={styles['extra-info-section']}>
        <Link href='/'>
          <a>Source code</a>
        </Link>
        <h6>Focus Points</h6>
        <p>
          This dating app focused on a users favorite books, creating matches
          based on that. This application worked with a database in MongoDB,
          which saved information like username but also a profile picture and
          your favorite books but also allowed you to edit the information. The
          runtime was established with Nodejs, the server and framework I used
          for this application was Express.js and I even used a lot of other
          dependencies in my code like handlebars.
        </p>
      </div>
    </div>
  )
}
