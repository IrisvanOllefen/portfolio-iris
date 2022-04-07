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
          width='60'
          height='100'
          className={styles.image}
        />
        <ul className={styles.links}>
          {data.allSocialLinks.map((item) => {
            return (
              <SocialLink
                socialLink={item.href}
                socialIcon={item.icon.url}
                className={styles.link}
                key={item.name}
              />
            )
          })}
        </ul>
        <p className={styles.copyright}>Copyright by Iris van Ollefen 2022</p>
      </div>
    </footer>
  )
}
