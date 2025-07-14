import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
    const {mealid}=useParams();
    const[data,setdata]=useState("");
    console.log(mealid)
    const fetchdata=async()=>{
     const get=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
    const result=await get.json();
    console.log(result.meals[0])
    setdata(result.meals[0])

    }
    useEffect(()=>{
        if(mealid){
            fetchdata()
        }
    },[mealid])
  return (
    <div className=' bg-gradient-to-br from-orange-600 via-orange-700 to-orange-900 p-4 w-full h-screen flex items-center justify-center p-2'>
      <div className='grid grid-cols-1 md:grid-cols-2 overflow-hidden backdrop-blur-lg bg-orange-100/10 border border-orange-300/30 shadow-2xl rounded-xl p-6 mx-h-screen w-full max-w-3xl '>
      <div className='flex items-center justify-center h-full w-full'>
      <img src={data.strMealThumb} className='rounded-t-xl md:rounded-l-xl md:rounded-tr-none w-full h-full object-cover'/>
           </div>
      <div className='text-orange-100 space-y-1 p-4 overflow-hidden h-full w-full'>
        <h1 className='text-2xl font-bold border-b border-orange-200/20 pb-1'>Recepie Details</h1>
        <h2 className='text-lg font-semibold truncate'>{data.strMeal}</h2>
        <h3 className='text-md font-semibold'>Instructions</h3>
        <p className='text-sm leading-snug text-orange-100 whitespace-pre-line line-clamp-[12] md:line-clamp-none'>{data.strInstructions}</p>

      </div>
      </div>
    </div>
  )
}

export default Mealinfo
