import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from "./Fooddetails.module.css"
import Itemlist from './Itemlist'
export default function Fooddetails({foodId}) 
{
const [food,setFood]=useState({})
const [isloading,setLoading]= useState(true);
const URL=`https://api.spoonacular.com/recipes/${foodId}/information`
const apikey="53e588155cdf408ab9aba57c3589188e"
 useEffect(( )=>{
    async function fetchFood( )
    {
        const res= await fetch(`${URL}?apiKey=${apikey}`)
        const data= await res.json()
        console.log(data)
        setFood(data)
        setLoading(false)
    }
    fetchFood()
 },[foodId])

return (
    <div>
    <div className={styles.recipecard} >
    <h1 className={styles.recipename}>{food.title}</h1>
    <img className={styles.recipeimage} src={food.image} alt="" />
    <div className={styles.recipedetails}>
    <span><strong>⏳{food.readyInMinutes} Minutes</strong></span>
    <span><strong>🔢Serves {food.servings}</strong></span>
    <span><strong>{food.vegetarian?"🍅Vegetarian":"🍗Non-Vegetarian"}</strong></span>
    <span><strong>{food.vegan?'🐄Vegan':''}</strong></span>
    </div>
    <div>
        <span>₹{food.pricePerServing} Per Serving</span>
    </div>
    <h2>Ingredients</h2>
    
    <Itemlist food={food} isloading={isloading}></Itemlist>
    <h1>Instructions</h1>
    <div className={styles.recipeinstuctions}>
        <ol>
        {isloading? <p>Loading....</p>:food.analyzedInstructions[0].steps.map(
            (allsteps)=>( <li>{allsteps.step}</li>)
        )}
        </ol>
    </div>
    </div>
 </div>
   
  )
}
