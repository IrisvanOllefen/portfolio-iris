/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import classNames from 'classnames'

import styles from './Introduction.module.css'

export default function Introduction() {
  return (
    <div className={classNames('container', styles.container)}>
      <h1>UX-designer and Front-end Developer</h1>
      <h2>I design and code user-friendly projects</h2>
      <span className={styles['image-wrapper']}>
        <Image
          src='/images/iris-picture.jpeg'
          width='200'
          height='200'
          className={styles.image}
        />
      </span>
    </div>
  )
}
