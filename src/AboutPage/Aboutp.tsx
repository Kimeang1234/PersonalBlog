import React from 'react'
import Header from 'Homepage/Header'
import Footer from 'Homepage/Footer'
import pep from '../images/pep.svg'
function Aboutp() {
  return (
    <div className='md:pb-5 flex xl:pt-2 flex-col justify-between min-h-screen'>
      <Header />
      <div className='flex'>
      <div className=" md:w-1/2 lg:w-1/3 text-start pb-20 pr-3 md:pt-36 pl-10">
        <h1 className=" text-5xl lg:text-6xl xl:text-7xl">About</h1>
        <h2 className=' text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-4'>Me</h2>
        <h3 className=' text-sm md:text-xl py-10'>Hello guys, I'm Sa. I'm Cambodian, I'm a student at RUPP or Royal University of Phnom Penh. Nowaday I'm training at One World.Co.LTD aka OW</h3>
        <button className='px-7 py-3 font-bold text-center text-xl text-white bg-black border-[2px]'>Read More</button>
      </div>
      <img src={pep} alt="peepleI" className=" top-20 right-0 w-1/2 lg:w-1/3 pt-20 md:p-32 absolute" />
      </div>
    </div>
  )
}

export default Aboutp
