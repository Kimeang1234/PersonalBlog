import React from 'react'
import Header from 'Homepage/Header'
import Footer from 'Homepage/Footer'
import peeple from '../images/peeple.svg'
function Aboutp() {
  return (
    <div className='md:pb-5 flex xl:pt-2 flex-col justify-between min-h-screen'>
      <Header />
      <div className="md:w-1/4 text-start pb-20 pr-3 md:pt-36 pl-10">
        <h1 className=" text-5xl xl:text-8xl">About</h1>
        <h2 className=' text-2xl xl:text-3xl pt-4'>Me</h2>
        <h3 className=' text-sm md:text-lg py-10'>Hello guys, I'm Sa. I'm Cambodian, I'm a student at RUPP or Royal University of Phnom Penh. Nowaday I'm training at One World.Co.LTD aka OW</h3>
        <button className='px-7 py-3 font-bold text-center text-xl text-white bg-black border-[2px]'>Read More</button>
      </div>
    </div>
  )
}

export default Aboutp
