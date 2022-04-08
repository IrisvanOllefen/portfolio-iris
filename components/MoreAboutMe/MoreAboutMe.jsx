/* eslint-disable jsx-a11y/alt-text */

import { StructuredText } from 'react-datocms'

import Image from 'next/image'
import styles from './MoreAboutMe.module.css'
import classNames from 'classnames'

export default function MoreAboutMe({ data }) {
  return (
    <div className={styles.container}>
      <div className={classNames('section', 'white')}>
        <h3>{data.moreAboutMe.title}</h3>
        <StructuredText data={data.moreAboutMe.text} />
        <Image
          src='/icons/chevrons-down.svg'
          width='30'
          height='30'
          className={styles.icon}
        />
      </div>
    </div>
  )
}
