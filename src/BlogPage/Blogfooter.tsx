import React from 'react'
import Footer from 'Homepage/Footer'

function Blogfooter() {
  return (
    <div className=" bg-black min-h-96 pt-2">
      <ul className='flex animate-marquee-scroll space-x-4 justify-center text-4xl '>
        <li className="text-white font-bold">Strategy</li>
        <li className="text-white font">Creativity</li>
        <li className="text-white font-bold">Distribute Terms</li>
        <li className="text-white font">UX Design</li>
        <li className="text-white font-bold">Remote Work</li>
        <li className="text-white font">Dopamine</li>
        <li className="text-white font-bold">Flexibilty</li>
        <li className="text-white font">Productivity</li>
      </ul>
      <footer className="text-primary lg:w-1/4 pb-10 md:mx-auto text-center">
        <h1 className='pt-20  pb-6 md:text-4xl text-3xl font-bold'>Chhon Kimeang</h1>
        <h2 className='py-6 text-lg md:text-lg px-3'>For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transitions using the motion-safe and motion-reduce variants.</h2>
          <div className=" pt-6 pl-4">
            <Footer />
          </div>
      </footer>
    </div>
  )
}

export default Blogfooter
