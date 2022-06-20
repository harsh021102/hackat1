import React from 'react'
import { BsGithub,BsInstagram,BsLinkedin} from "react-icons/bs";
const Footer = () => {
  return (
    <div className='flex bg-dark-black h-full justify-center items-center flex-col gap-4'>
        <h1 className='text-2xl text-white mt-8'>Created by <span className='text-light-blue font-bold'>Harsh Pratap Singh</span></h1>
        <div className='flex text-4xl gap-4 cursor-pointer mb-8 text-white'>
            <button><a href='https://github.com/harsh021102' target="_blank"><BsGithub/></a></button>
            <button><a href='https://www.instagram.com/h_.a._.r._.s._h/' target="_blank"><BsInstagram/></a></button>
            <button><a href='https://www.linkedin.com/in/harsh-pratap-singh-17b02722b/' target="_blank"><BsLinkedin/></a></button>
        </div>
    </div>
  )
}

export default Footer