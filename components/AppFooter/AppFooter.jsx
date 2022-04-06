/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'

import SocialLink from '../SocialLink'
import styles from './AppFooter.module.css'

export default function AppFooter({ data }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
          src='/images/black-logo.svg'
          width='75'
          height='120'
          className={styles.image}
        />
        <ul className={styles.links}>
          {data.allSocialLinks.map((item) => {
            return (
              <SocialLink
                key={item.name}
                socialName={item.name}
                socialLink={item.href}
              />
            )
          })}
        </ul>
      </div>
      <p className={styles.copyright}>Copyright by Iris van Ollefen 2022</p>
    </footer>
  )
}
