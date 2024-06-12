import React from 'react'
import Header from 'Homepage/Header'
import Footer from 'Homepage/Footer'
function Aboutp() {
  return (
    <div className='pb-5 flex flex-col justify-between min-h-screen'>
      <Header />
        <div className="w-1/4 text-start pl-10">
          <h1 className=" text-8xl">About</h1>
          <h2 className='text-6xl pt-4'>Me</h2>
          <h3 className='text-lg py-16'>Hello guys, I'm Sa. I'm Cambodian, I'm a student at RUPP or Royal University of Phnom Penh. Nowaday I'm training at One World.Co.LTD aka OW</h3>
          <button className='px-7 py-3 font-bold justify-center text-center text-xl text-white bg-black border-[2px]'>Read More</button>
        </div>
    </div>
  )
}

export default Aboutp
