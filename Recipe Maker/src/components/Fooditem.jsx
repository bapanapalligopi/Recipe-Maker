import React from 'react'
import styles from "./fooditem.module.css"
export default function Fooditem({setfoodid,fooditem}) {
  return (
    <div className={styles.itemcontainer}>
    <img className={styles.itemimage}src={fooditem.image} alt="No image found" />
    <br />
    <div className={styles.itemcontent}>
       <p className={styles.itemname}>{fooditem.title}</p>
    </div>
    <div className={styles.butcontainer}>
    <button onClick={()=>{setfoodid(fooditem.id)}}className={styles.itembut}>View Recipe</button>

    </div>
    </div>
  )
}
