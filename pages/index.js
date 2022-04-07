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
  moreAboutMe {
    title
    text {
      value
    }
  }
  jobCollection {
    jobCard {
      title
      description {
        value
      }
      list {
        title
        listItem {
          title
        }
      }
    }
  }
  workCollection {
    workCard {
      title
      subtitle
      typeOfProject
      image {
        responsiveImage {
          webpSrcSet
        }
      }
      link {
        title
        href
      }
      focusPoints
      content {
        value
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
        <MoreAboutMe data={data} />
        <JobCollection data={data} />
        <MyWork data={data} />
      </main>
      <AppFooter data={data} />
    </div>
  )
}
