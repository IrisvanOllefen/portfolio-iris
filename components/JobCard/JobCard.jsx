import { StructuredText } from 'react-datocms'

import styles from './JobCard.module.css'

export default function JobCard({ data }) {
  return (
    <>
      {data.jobCard.map((item) => {
        return (
          <div key={item.title} className={styles.section}>
            <h4 className='blue'>{item.title}</h4>
            <span className='grey'>
              <StructuredText data={item.description} />
            </span>
            {item.list.map((listGroup) => {
              return (
                <>
                  <h5 className='blue'>{listGroup.title}</h5>
                  <ul className='grey'>
                    {Object.values(listGroup.listItem).map((item) => {
                      return <li key={item.title}>{item.title}</li>
                    })}
                  </ul>
                </>
              )
            })}
          </div>
        )
      })}
    </>
  )
}
