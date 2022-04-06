import classNames from 'classnames'

import styles from './MyWork.module.css'

import MyWorkCard from '../MyWorkCard'

export default function MyWork() {
  return (
    <div className={styles.container}>
      <h3>My work</h3>
      <div className='container'>
        <MyWorkCard />
      </div>
    </div>
  )
}
