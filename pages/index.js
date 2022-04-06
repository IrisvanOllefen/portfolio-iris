import Head from 'next/head'
import { request } from '../lib/datocms'

import AppHeader from '../components/AppHeader'
import SocialLink from '../components/SocialLink'
import Introduction from '../components/Introduction'
import MoreAboutMe from '../components/MoreAboutMe'
import JobCollection from '../components/JobCollection'
import MyWork from '../components/MyWork'
import AppFooter from '../components/AppFooter'

const QUERY = `query MyQuery {
  allSocialLinks {
    name
    href
  }
  introduction {
    title
    subtitle
    image {
      responsiveImage {
        src
        srcSet
        webpSrcSet
        width
        height
      }
    }
  }
}
`

export async function getStaticProps() {
  const data = await request({
    query: QUERY,
  })
  return {
    props: { data },
  }
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Portfolio Iris</title>
      </Head>
      <AppHeader data={data} />
      <main>
        <Introduction data={data} />
        <MoreAboutMe />
        <JobCollection />
        <MyWork />
      </main>
      <AppFooter data={data} />
    </div>
  )
}
