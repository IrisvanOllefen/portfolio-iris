/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Link from 'next/link'

import styles from './AppFooter.module.css'

export default function AppFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image src='/images/black-logo.svg' width='75' height='120' />
        <ul className={styles.links}>
          <li>
            <Link href='https://twitter.com/irisvanollefen'>
              <a>Twitter</a>
            </Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/iris-van-ollefen-38346417b/'>
              <a>LinkedIn</a>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/IrisvanOllefen'>
              <a>GitHub</a>
            </Link>
          </li>
          <li>Email me</li>
        </ul>
      </div>
      <p className={styles.copyright}>Copyright by Iris van Ollefen 2022</p>
    </footer>
  )
}
