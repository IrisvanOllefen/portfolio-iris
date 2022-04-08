/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames'
import Image from 'next/image'

import styles from './Introduction.module.css'

export default function Introduction({ data }) {
  return (
    <div className={classNames('container', styles.container)}>
      <h1 className='blue'>{data.introduction.title}</h1>
      <h2 className='grey'>{data.introduction.subtitle}</h2>
      <span className={styles['image-wrapper']}>
        <Image
          src={data.introduction.image.responsiveImage.webpSrcSet}
          width='250'
          height='250'
          className={styles.image}
        />
      </span>
    </div>
  )
}
