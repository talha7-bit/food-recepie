import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({items}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 overflow-hidden'>
      {items.map((item,index)=>(
        <div key={index} className='flex flex-col mx-3 border border-white rounded'>
        <img src={item.strMealThumb} className='h-55 w-full mt-1 border border-white rounded'/>
        <div className='flex flex-col gap-1 items-center justify-center'>
        <h1 className='text-2xl font-bold mx-2 '>{item.strMeal}</h1>
        <NavLink to={`/${item.idMeal}`}><button className='bg-orange-500 text-white px-4 py-1 mx-3 rounded hover:bg-orange-900 cursor-pointer'>Recepie</button></NavLink>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Card
