import React, { useState } from 'react'
import { useEffect } from 'react'
import List from './List';
import Heading from './Heading';

const Hackerrank = () => {
  const url = 'https://kontests.net/api/v1/hacker_rank' 
  const [contest,setContest] = useState([])
  const [today,setToday] = useState("")
  const todayDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    setToday(yyyy + '-' + mm + '-' + dd)
  }
  //API fetching
  const contestsFun = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setContest(data)
    // console.log(data)
  }
  //sorting
  let arr = contest;
  const sortByDate = arr => {
    const sorter = (a, b) => {
      console.log(contest)
      return new Date(a.start_time).getTime() - new Date(b.start_time).getTime();
    }
    arr.sort(sorter);
  };
  //filtering of data by start date
  let filterArray = arr.filter( item => {
    if(item.start_time>=today)
    return item;
  })
  
  const display = () => {
    if(filterArray.length===0)
    return(
      <h1 className='text-4xl text-white mx-auto'>No contest found</h1>
      )
      else{
        return filterArray.map((item,index)=><List key={index} index={index} name={item.name} start={item.start_time} end={item.end_time} duration={item.duration} hours={item.in_24_hours} status={item.status} link={item.url}/>)
    }
  }

  sortByDate(arr);
  // filterArray(arr);
  useEffect(()=>{
    todayDate();
    contestsFun()
  },[])
  return (
    <div className='flex-1 mt-4 w-full h-full  bg-light-black overflow-auto gap-2 mb-8'>
      <h1 className='flex justify-center items-center text-3xl text-white font-bold font-inter py-4 bg-dark-black border-b-4 border-dark-blue mx-2 rounded-md shadow-lg mb-4'>Hackerrank ({filterArray.length})</h1>
        <Heading/>
        <div className="grid grid-cols-1 gap-4 px-2">
          {
            display()
          }
        </div>
    </div>
  )
}

export default Hackerrank