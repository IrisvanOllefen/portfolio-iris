/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { StructuredText } from 'react-datocms'

import styles from './MyWorkCard.module.css'

export default function MyWorkCard({ data }) {
  return (
    <div className={styles.container}>
      {data.workCollection.workCard.map((item) => {
        return (
          <>
            <div key={item} className={styles['title-image-section']}>
              <h4 className='grey'>{item.title}</h4>
              <h5 className='grey'>{item.subtitle}</h5>
              <h6 className='grey'>{item.typeOfProject}</h6>
              <Image
                src={item.image.responsiveImage.webpSrcSet}
                width='300'
                height='200'
                className={styles.image}
              />
            </div>
            <div className={styles['extra-info-section']}>
              {item.link.map((linkItem) => {
                return (
                  <Link href={linkItem.href} key={linkItem.title}>
                    <a className={classNames('a', 'grey')}>{linkItem.title}</a>
                  </Link>
                )
              })}
              <h6 className='grey'>{item.focusPoints}</h6>
              <span className='grey'>
                <StructuredText data={item.content} />
              </span>
            </div>
          </>
        )
      })}
    </div>
  )
}
