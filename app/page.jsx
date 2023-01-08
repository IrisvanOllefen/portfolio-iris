import { request } from '../lib/datocms'

import HomePage from './HomePage'

const QUERY = `query MyQuery {
    allSocialLinks {
      name
      href
      icon {
        responsiveImage {
          webpSrcSet
        }
        url
      }
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
          id
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

export async function fetchDato() {
  const data = await request({
    query: QUERY,
  })
  return data
}

export default async function Page() {
  const data = await fetchDato()
  return <HomePage data={data} />
}
