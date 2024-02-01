import React from 'react'
import styles from "./innercontainer.module.css"
export default function InnerContainer({children}) {
  return (
    <div className={styles.stylecontainer}>
      {children}
    </div>
  )
}