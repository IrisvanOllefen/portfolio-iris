import styles from './JobCard.module.css'

export default function JobCard() {
  return (
    <>
      <div className={styles.section}>
        <h4>Front-end Developer</h4>
        <p>
          As a front-end developer I have been building my skills through
          learning at my last internship and studying the depths of the internet
        </p>
        <h5>I like working with the following things:</h5>
        <ul className='ul'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>DatoCMS</li>
        </ul>
        <h5>I have also worked with</h5>
        <ul className='ul'>
          <li>Vue</li>
          <li>Nuxt.js</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h4>UX Designer</h4>
        <p>
          Although the last projects I have done have been front-end projects, I
          started out thinking I would end up in UX design. I still enjoy it a
          lot.
        </p>
        <h5>I really like the following things:</h5>
        <ul className='ul'>
          <li>Designing mobile-first responsive applications</li>
          <li>
            Doing research to better the user experience of an application
          </li>
        </ul>
        <h5>I like working with:</h5>
        <ul className='ul'>
          <li>Figma</li>
          <li>Adobe XD</li>
        </ul>
        <h5>I have also worked with:</h5>
        <ul className='ul'>
          <li>Framer</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Adobe InDesign</li>
        </ul>
      </div>
    </>
  )
}
