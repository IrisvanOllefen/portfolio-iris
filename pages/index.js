import Head from 'next/head'
import styles from '../styles/Home.module.css'

import AppHeader from '../components/AppHeader'
import Introduction from '../components/Introduction'
import MoreAboutMe from '../components/MoreAboutMe'
import JobCollection from '../components/JobCollection'
import MyWork from '../components/MyWork'
import AppFooter from '../components/AppFooter'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Iris</title>
      </Head>
      <AppHeader />
      <main className={styles.main}>
        <Introduction />
        <MoreAboutMe />
        <JobCollection />
        <MyWork />
      </main>
      <AppFooter />
    </div>
  )
}
