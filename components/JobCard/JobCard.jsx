import { StructuredText } from 'react-datocms'

import styles from './JobCard.module.css'

export default function JobCard({ data }) {
  return (
    <>
      {data.jobCard.map((item) => {
        return (
          <div key={item.title} className={styles.section}>
            <h4>{item.title}</h4>
            <StructuredText data={item.description} />
            {item.list.map((listGroup) => {
              return (
                <>
                  <h5>{listGroup.title}</h5>
                  <ul>
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
