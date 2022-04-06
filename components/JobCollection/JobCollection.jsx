import classNames from 'classnames'

import JobCard from '../JobCard'
import styles from './JobCollection.module.css'

export default function JobCollection() {
  return (
    <div className={classNames('container', styles.container)}>
      <JobCard />
    </div>
  )
}
