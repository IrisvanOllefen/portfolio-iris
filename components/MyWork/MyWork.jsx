import classNames from 'classnames'

import styles from './MyWork.module.css'

import MyWorkCard from '../MyWorkCard'

export default function MyWork({ data }) {
  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <h3>My work</h3>
        <div className='container'>
          <MyWorkCard data={data} />
        </div>
      </div>
    </div>
  )
}
