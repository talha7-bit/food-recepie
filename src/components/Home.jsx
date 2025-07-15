import React, { useEffect, useState } from 'react'
import Card from './Card';
import { LoaderIcon } from 'lucide-react';

const Home = () => {
    const[data,setdata]=useState([]);
    const[search,setsearch]=useState("");
    const[error,seterror]=useState("");
    const[loading,setloading]=useState("");
    const[load,setload]=useState(false);

    const fetchd=async(query="cake")=>{
      setload(true);
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
    }finally{
      setload(false);
    }
  }
    useEffect(()=>{
      setloading("loading...")
        fetchd().finally(()=>{
          setloading("");
        })
    },[])
    const handlesearch=(e)=>{
      e.preventDefault();
    
      fetchd(search)
      
    }
  return (
    <div className='mt-3'>
      <form onSubmit={handlesearch} className='flex items-center mx-auto'>
        <input type='text' placeholder='search by name' value={search} onChange={(e)=>
          setsearch(e.target.value)
        } className='border rounded px-4 py-1 '/>
        <button className='mx-1 text-white bg-orange-500 px-4 py-1 rounded-xl' type='submit'>{load ? <LoaderIcon className='w-4 h-4 animate-spin'/>:" "} Search</button>
        </form>
        {error && <div className='text-red-500 text-center mt-1'>
          {error}
          </div>}
          {loading && <h3 className='flex items-center justify-center mt-60'>{loading}</h3>}
    <Card items={data}/>  
    </div>
  )
}

export default Home
