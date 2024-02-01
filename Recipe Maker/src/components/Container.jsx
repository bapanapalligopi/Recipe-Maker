import React from 'react'
import styles from "./Container.module.css"
//provide left right structure
export default function Container( {children}) {
  return (
    <div className= {styles.parentcontainer}>
       {children}
    </div>
  )
}
