import hackerrank from "../images/hackerrank.png";
import codechef from "../images/codechef.jpg";
import codeforces from "../images/codeforces.png";
import hackerearth from "../images/hackerearth.jpg";
import kickstart from "../images/kickstart.jpg";
import leetcode from "../images/leetcode.png";
import { useNavigate } from 'react-router-dom';
export default function Card() {
  const navigate = useNavigate();
  return (
      <div className='w-full bg-light-black'>
        <h1 className='sm:hidden justify-center pt-4 flex sm:py-4 sm:mx-16 text-4xl text-white underline font-bold '>Sites</h1>
        <div className='grid grid-cols-3 mt-4 gap-4 p-4 bg-dark-black shadow-lg rounded-md sm:hidden'>
          <button className='text-md bg-dark-blue text-white rounded-md py-2 border-b-4 hover:bg-light-blue transition-all duration-300' onClick={()=>navigate('')}>Codechef</button>
          <button className='text-md bg-dark-blue text-white rounded-md py-2 border-b-4 hover:bg-light-blue transition-all duration-300' onClick={()=>navigate('hackerrank')}>Hackerrank</button>
          <button className='text-md bg-dark-blue text-white rounded-md py-2 border-b-4 hover:bg-light-blue transition-all duration-300' onClick={()=>navigate('kickstart')}>Kickstart</button>
          <button className='text-md bg-dark-blue text-white rounded-md py-2 border-b-4 hover:bg-light-blue transition-all duration-300' onClick={()=>navigate('leetcode')}>LeetCode</button>
          <button className='text-md bg-dark-blue text-white rounded-md py-2 border-b-4 hover:bg-light-blue transition-all duration-300' onClick={()=>navigate('codeforces')}>Codeforces</button>
          <button className='text-md bg-dark-blue text-white rounded-md py-2 border-b-4 hover:bg-light-blue transition-all duration-300' onClick={()=>navigate('hackerearth')}>Hackerearth</button>
        </div>
        <div className="hidden sm:flex flex-wrap justify-center items-center mt-4 mx-4 gap-4 py-4 bg-dark-black shadow-lg rounded-md" >
          <div className='w-56 shadow-md pointer-cursor'>
            <div className='w-full flex flex-col justnify-center items-center gap-4'>
              <img src={hackerearth} className='w-full h-36 bg-cover bg-no-repeat bg-center rounded-lg shadow-md bg-light-blue hover:cursor-pointer' alt=""/>
              <button className='flex justify-center items-center mb-4 p-2 font-light font-outfit text-xl bg-dark-blue rounded-md shadow-md text-white hover:bg-light-blue transition-all duration-300' onClick={()=>navigate('hackerearth')}>Open</button>
            </div>
          </div>

          <div className='w-56 shadow-md pointer-cursor'>
            <div className='w-full flex flex-col justify-center items-center gap-4'>
              <img src={codechef} className='w-full h-36 bg-cover bg-no-repeat bg-center rounded-lg shadow-md bg-light-blue hover:cursor-pointer' alt=""/>
              <button className='flex justify-center items-center mb-4 p-2 font-light font-outfit text-xl bg-dark-blue rounded-md shadow-md text-white hover:bg-light-blue transition-all duration-300' onClick={()=>navigate('')}>Open</button>
            </div>
          </div>

          <div className='w-56 shadow-md pointer-cursor'>
            <div className='w-full flex flex-col justify-center items-center gap-4'>
              <img src={hackerrank} className='w-full h-36 bg-cover bg-no-repeat bg-center rounded-lg shadow-md bg-light-blue hover:cursor-pointer' alt=""/>
              <button className='flex justify-center items-center mb-4 p-2 font-light font-outfit text-xl bg-dark-blue rounded-md shadow-md text-white hover:bg-light-blue transition-all duration-300' onClick={()=>navigate('hackerrank')}>Open</button>
            </div>
          </div>

          <div className='w-56 shadow-md pointer-cursor'>
            <div className='w-full flex flex-col justify-center items-center gap-4'>
              <img src={leetcode} className='w-full h-36 bg-cover bg-no-repeat bg-center rounded-lg shadow-md bg-light-blue hover:cursor-pointer' alt=""/>
              <button className='flex justify-center items-center mb-4 p-2 font-light font-outfit text-xl bg-dark-blue rounded-md shadow-md text-white hover:bg-light-blue transition-all duration-300' onClick={()=>navigate('leetcode')}>Open</button>
            </div>
          </div>

          <div className='w-56 shadow-md pointer-cursor'>
            <div className='w-full flex flex-col justify-center items-center gap-4'>
              <img src={codeforces} className='w-full h-36 bg-cover bg-no-repeat bg-center rounded-lg shadow-md bg-light-blue hover:cursor-pointer' alt=""/>
              <button className='flex justify-center items-center mb-4 p-2 font-light font-outfit text-xl bg-dark-blue rounded-md shadow-md text-white hover:bg-light-blue transition-all duration-300' onClick={()=>navigate('codeforces')}>Open</button>
            </div>
          </div>
          
          <div className='w-56 shadow-md pointer-cursor'>
            <div className='w-full flex flex-col justify-center items-center gap-4'>
              <img src={kickstart} className='w-full h-36 bg-cover bg-no-repeat bg-center rounded-lg shadow-md bg-light-blue hover:cursor-pointer' alt=""/>
              <button className='flex justify-center items-center mb-4 p-2 font-light font-outfit text-xl bg-dark-blue rounded-md shadow-md text-white hover:bg-light-blue transition-all duration-300' onClick={()=>navigate('kickstart')}>Open</button>
            </div>
          </div>
        </div>
      </div>
  );
}