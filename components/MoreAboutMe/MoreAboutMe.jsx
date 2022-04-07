/* eslint-disable jsx-a11y/alt-text */

import classNames from 'classnames'

import { StructuredText } from 'react-datocms'

import Image from 'next/image'
import styles from './MoreAboutMe.module.css'

export default function MoreAboutMe({ data }) {
  console.log(data)
  return (
    <div className={styles.container}>
      <div className='section'>
        <h3>{data.moreAboutMe.title}</h3>
        <StructuredText data={data.moreAboutMe.text} />
        <Image src='/icons/chevrons-down.svg' width='30' height='30' />
      </div>
    </div>
  )
}
