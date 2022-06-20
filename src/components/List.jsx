import React, { useState } from 'react'
import { useEffect } from 'react';

const List = ({index,name,start,end,duration,hours,status,link}) => {
    const [durationHMS,setDurationHMS] = useState("-");
    const[startdate,setStartDate] = useState("");
    const[enddate,setEndDate] = useState("");
    function convertHMS(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        
        var dDisplay = d > 0 ? d + (d == 1 ? " day " : " days ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
        }
    const startdateExtract=()=>
    {
        let s=start
        let index
        if(start.indexOf(" ")!==-1)
            index = start.indexOf(" ")
        else if(start.indexOf("T")!==-1)
            index = start.indexOf("T")
        // console.log(index)
        let temp= s.slice(0,index)
        const hyphen1 = temp.indexOf("-")
        const hyphen2 = temp.indexOf("-",hyphen1+1)
        let yy = temp.slice(0,hyphen1);
        let mm = temp.slice(hyphen1+1,hyphen2);
        let dd = temp.slice(hyphen2+1,temp.length);
        let tempAns = dd+"-"+mm+"-"+yy
        setStartDate(tempAns)
    }
    const enddateExtract=()=>
    {
        let s=end
        let index
        if(start.indexOf(" ")!==-1)
            index = start.indexOf(" ")
        else if(start.indexOf("T")!==-1)
            index = start.indexOf("T")
        console.log(index)
        let temp= s.slice(0,index)
        const hyphen1 = temp.indexOf("-")
        const hyphen2 = temp.indexOf("-",hyphen1+1)
        let yy = temp.slice(0,hyphen1);
        let mm = temp.slice(hyphen1+1,hyphen2);
        let dd = temp.slice(hyphen2+1,temp.length);
        let tempAns = dd+"-"+mm+"-"+yy
        setEndDate(tempAns)
    }
    useEffect(()=>{
        const time= convertHMS(duration)
        setDurationHMS(time)
        startdateExtract()
        enddateExtract()
    },[])

  return (
    <div className='w-full shadow-md'>
        <div className='w-full border-b-2 border-light-blue bg-dark-black shadow-md gap-4 py-4 rounded-md px-2 sm:hidden'>
            <h1 className='text-white text-xl my-2 font-light font-outfit text-center'><span className='font-bold text-light-blue'>Name:</span> {name}</h1>
            <h1 className='text-white text-xl my-2 font-light font-outfit text-center'><span className='font-bold text-light-blue'>Start Date:</span> {startdate}</h1>
            <h1 className='text-white text-xl my-2 font-light font-outfit text-center'><span className='font-bold text-light-blue'>End Date:</span> {enddate}</h1>
            <h1 className='text-white text-xl my-2 font-light font-outfit text-center'><span className='font-bold text-light-blue'>Duration:</span> {durationHMS}</h1>
            <h1 className='text-white text-xl my-2 font-light font-outfit text-center'><span className='font-bold text-light-blue'>In 24 Hours:</span> {hours}</h1>
            <h1 className='text-white text-xl my-2 font-light font-outfit text-center'><span className='font-bold text-light-blue'>Status:</span> {status}</h1>
            <button className='flex flex-wrap m-auto text-xl font-bold shadow-md rounded-md bg-dark-blue text-white px-4 py-2 '>
                <a href={link} target="_blank">Go to Contest</a>
            </button>
        </div>
        <div className='hidden border-b-4 border-light-blue sm:w-full bg-dark-black sm:grid grid-cols-7 shadow-md gap-4 py-4 rounded-md px-2'>
            <h1 className='text-white text-xl my-auto font-light font-outfit text-center'>{name}</h1>
            <h1 className='text-white text-xl my-auto font-light font-outfit text-center'>{startdate}</h1>
            <h1 className='text-white text-xl my-auto font-light font-outfit text-center'>{enddate}</h1>
            <h1 className='text-white text-xl my-auto font-light font-outfit text-center'>{durationHMS}</h1>
            <h1 className='text-white text-xl my-auto font-light font-outfit text-center'>{hours}</h1>
            <h1 className='text-white text-xl my-auto font-light font-outfit text-center'>{status}</h1>
            <button className='flex flex-wrap m-auto text-md font-bold shadow-md rounded-md bg-dark-blue text-white px-4 py-2 hover:bg-light-blue transition-all duration-200 hover:border-b-4'>
                <a href={link} target="_blank">Go to Contest</a>
            </button>
        </div>
    </div>
  )
}

export default List