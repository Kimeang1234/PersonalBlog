import React from 'react'
import Header from 'Homepage/Header'
import Contactfooter from './Contactfooter'

function ContactP() {
  return (
    <div className="flex flex-col bg-cover">
      <Header />
        <div className="md:min-h-screen mx-auto md:mx-0 md:justify-start pt-10 text-2xl w-1/3 text-center font-semibold md:pl-20 md:flex-grow md:flex md:items-center ">
          <h1 className='md:text-6xl 2xl:text-8xl font-semibold font-display2 md:w-1/3'>
            Let’s blow (speech) bubbles
          </h1>
        </div>
      <Contactfooter />
    </div>
  )
}

export default ContactP
