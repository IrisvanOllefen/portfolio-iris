import Head from 'next/head'
import styles from '../styles/Home.module.css'

import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Iris</title>
      </Head>
      <AppHeader />
      <main className={styles.main}>
        <div className={styles.introduction}>
          <h1>UX-designer and Front-end Developer</h1>
          <h2>I design and code user-friendly projects</h2>
          {/* picture or icon of me */}
          {/* change of background/color/animation/something */}
        </div>
        <div className={styles['more-information']}>
          <h3>My name is Iris, it is good to meet you!</h3>
          {/* little story (1 paragraph) about cmd and that i've done multiple internships */}
        </div>
        <div className={styles['front-end-developer']}>
          <h4>Front-end Developer</h4>
          <p>
            As a front-end developer I have been building my skills through
            learning at my last internship and studying the depths of the
            internet
          </p>
          <h5>I like working with the following things:</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>DatoCMS</li>
          </ul>
          <h5>I have also worked with</h5>
          <ul>
            <li>Vue</li>
            <li>Nuxt.js</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className={styles['ux-designer']}>
          <h4>UX Designer</h4>
          <p>
            Although the last projects I have done have been front-end projects,
            I started out thinking I would end up in UX design. I still enjoy it
            a lot.
          </p>
          <h5>I really like the following things:</h5>
          <ul>
            <li>Designing mobile-first responsive applications</li>
            <li>
              Doing research to better the user experience of an application
            </li>
          </ul>
          <h5>I like working with:</h5>
          <ul>
            <li>Figma</li>
            <li>Adobe XD</li>
          </ul>
          <h5>I have also worked with:</h5>
          <ul>
            <li>Framer</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe InDesign</li>
          </ul>
        </div>
        <div className={styles['my-work']}>
          <h3>My work</h3>
          <div>
            <h4>title</h4>
            <p>description</p>
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  )
}
