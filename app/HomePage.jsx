import Head from 'next/head'

import AppHeader from '../components/AppHeader'
import Introduction from '../components/Introduction'
import MoreAboutMe from '../components/MoreAboutMe'
import JobCollection from '../components/JobCollection'
import MyWork from '../components/MyWork'
import AppFooter from '../components/AppFooter'

export default function HomePage({ data }) {
  return (
    <div>
      <Head>
        <title>Portfolio Iris</title>
      </Head>
      <AppHeader data={data} />
      <main>
        <Introduction data={data} />
        <MoreAboutMe data={data} />
        <JobCollection data={data} />
        <MyWork data={data} />
      </main>
      <AppFooter data={data} />
    </div>
  )
}
