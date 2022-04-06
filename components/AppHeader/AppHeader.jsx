/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'

import SocialLink from '../SocialLink'
import styles from './AppHeader.module.css'

export default function AppHeader({ data }) {
  return (
    <div className={styles.container}>
      <Image src='/images/white-logo.svg' width='75' height='120' />
      <ul className={styles.links}>
        {data.allSocialLinks.map((item) => {
          return (
            <SocialLink
              socialName={item.name}
              socialLink={item.href}
              key={item.name}
            />
          )
        })}
      </ul>
    </div>
  )
}
