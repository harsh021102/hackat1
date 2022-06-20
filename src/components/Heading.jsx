import React from 'react'

const Heading = () => {
  return (
    <div className='hidden sm:grid grid-cols-7 gap-2 px-2 mb-4 border-b-4 shadow-2xl p-2 bg-dark-blue mx-2 rounded-md py-4'>
        <h1 className='text-white text-2xl font-bold font-outfit pl-4 text-center'>Name</h1>
        <h1 className='text-white text-2xl font-bold font-outfit my-auto text-center'>Start Date</h1>
        <h1 className='text-white text-2xl font-bold font-outfit my-auto text-center'>End Date</h1>
        <h1 className='text-white text-2xl font-bold font-outfit my-auto text-center'>Duration</h1>
        <h1 className='text-white text-2xl font-bold font-outfit my-auto text-center'>In 24 Hours</h1>
        <h1 className='text-white text-2xl font-bold font-outfit my-auto text-center'>Status</h1>
        <h1 className='text-white text-2xl font-bold font-outfit  m-auto text-center'>Link</h1>
    </div>
  )
}

export default Heading