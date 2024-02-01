import React, { useEffect, useState } from 'react'
const URL="https://api.spoonacular.com/recipes/complexSearch"
const APIKEY="53e588155cdf408ab9aba57c3589188e"
import styles from "./Search.module.css"
export default function Search({foodData,setfoodData}) 
{
   
    const [query,setQuery]=useState('');
    //syntax
    useEffect((e)=>{
       
        //making api call using function

        async function fetchFood()
        {
            try
            {
               const res= await fetch(`${URL}?query=${query}&apiKey=${APIKEY}`);
               const data=await res.json( );
                //set the data 
                setfoodData(data.results);
            }
            catch(error)
            {
                console.log('error')
            }
          
        }
        fetchFood();
    },[query])
  return (
    <div className={styles.Searchcontainer}>
      <input className={styles.input} type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search for Recipe....'/>
    </div>
  )
}
