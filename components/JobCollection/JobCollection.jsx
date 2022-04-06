import JobCard from '../JobCard'
import styles from './JobCollection.module.css'

export default function JobCollection() {
  return (
    <div className={styles.container}>
      <JobCard />
    </div>
  )
}
