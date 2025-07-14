import React, { useEffect, useState } from 'react'
import Card from './Card';

const Home = () => {
    const[data,setdata]=useState([]);
    const[search,setsearch]=useState("");
    const[error,seterror]=useState("");

    const fetchd=async(query="cake")=>{
    try{
        const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        const result=await response.json();
        console.log(result.meals);
        if(result.meals==null){
           await fetchd("cake")
           setsearch("")
          seterror(`no recepie found for ${query}.`);
        
          
        }else{
          seterror("");
          setdata(result.meals)
          setsearch("")
        }
    
    }catch(error){
      seterror("something went wrong please try again")
    }
  }
    useEffect(()=>{
        fetchd();
    },[])
    const handlesearch=(e)=>{
      e.preventDefault();
    
      fetchd(search)
      
    }
  return (
    <div>
      <form onSubmit={handlesearch} className='flex items-center mx-auto'>
        <input type='text' placeholder='search by name' value={search} onChange={(e)=>
          setsearch(e.target.value)
        } className='border rounded px-4 py-1 '/>
        <button className='mx-1 text-white bg-orange-500 px-4 py-1 rounded-xl' type='submit'>Search</button>
        </form>
        {error && <div className='text-red-500 text-center mt-1'>
          {error}
          </div>}
    <Card items={data}/>  
    </div>
  )
}

export default Home
