import React from 'react'
import Fooditem from './Fooditem'

export default function Foodlist({setfoodid,foodData}) {
  return (
    <div>
       {foodData.map((food)=><Fooditem setfoodid={setfoodid}key={food.title}fooditem={food}/>)}
    </div>
  )
}
