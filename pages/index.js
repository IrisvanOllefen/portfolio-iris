import Head from 'next/head'

import AppHeader from '../components/AppHeader'
import Introduction from '../components/Introduction'
import MoreAboutMe from '../components/MoreAboutMe'
import JobCollection from '../components/JobCollection'
import MyWork from '../components/MyWork'
import AppFooter from '../components/AppFooter'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Iris</title>
      </Head>
      <AppHeader />
      <main>
        <Introduction />
        <MoreAboutMe />
        <JobCollection />
        <MyWork />
      </main>
      <AppFooter />
    </div>
  )
}
