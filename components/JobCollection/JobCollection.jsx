import classNames from 'classnames'

import JobCard from '../JobCard'
import styles from './JobCollection.module.css'

export default function JobCollection({ data }) {
  return (
    <>
      <div className={styles.background}></div>
      <div className={classNames('container', styles.container)}>
        <JobCard data={data.jobCollection} />
      </div>
    </>
  )
}
