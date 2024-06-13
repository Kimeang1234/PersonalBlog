import React from 'react'
import Header from 'Homepage/Header'
import Footer from 'Homepage/Footer'
import pep from '../images/pep.svg'
import backgroundImage from '../images/P2.jpg'
function Aboutp() {
  return (
    <div className='flex pb-7 flex-col min-h-screen justify-between'>
      <Header />
      <div className=" px-10 md:pb-10 bg-contain">
       <div className="pb-7 md:pb-10 lg:pb-13 xl:pb-16">
         <h1 className="text-5xl font-display2 font-bold md:text-6xl xl:text-7xl">About</h1>
          <h2 className='text-3xl font-display2 font-bold md:text-4xl xl:text-5xl md:pt-2 pb-4'>Me</h2>
          <h3 className='lg:w-1/2 text-base line-clamp-3 md:text-2xl pt-5'>Hello guys, I'm Sa. I'm Cambodian, I'm a student at RUPP or Royal University of Phnom Penh. Nowaday I'm training at One World.Co.LTD aka OW. Astronomy has always fascinated me, but living in Phnom Penh it's hard to see the stars clearly. That's why I'm excited about the backyard astronomy boom! With a little planning, even city dwellers can enjoy the wonders of the universe. Maybe I can convince my friends at OW to join a stargazing party or even set up a telescope on the rooftop!  After all, who wouldn't want to explore the cosmos from our very own Phnom Penh?</h3>
       </div>
        <button className=' md:py-3 md:text-xl md:px-6 bg-black text-white text-base font-bold py-2 px-3'>Read More</button>
      </div>
    </div>
  )
}

export default Aboutp
