/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './AppHeader.module.css'

export default function AppHeader() {
  return (
    <div className={styles.container}>
      <Image src='/images/white-logo.svg' width='75' height='120' />
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
      </ul>
    </div>
  )
}
