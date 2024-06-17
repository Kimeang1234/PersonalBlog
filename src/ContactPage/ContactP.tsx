import React from 'react'
import Header from 'Homepage/Header'
function ContactP() {
  return (
    <div className=" min-h-screen bg-cover">
        <div>
            <Header />
        </div>
        <div className=" mx-auto p-3 md:w-1/2 text-center pt-20">
            <h1 className='pb-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Contact us</h1>
            <p className="text-base md:text-lg lg:text-2xl xl:text-3xl font-display3">Hi there, I'm Chhon KimEang. We're dedicated to helping businesses like yours achieve a marketing automation SaaS like reaching more customers and grow your sales. If you're interested in a demo or have any questions, feel free to shoot me an email at</p>
            <p className="pt-10 text-xl md:text-2xl lg:text-3xl font-bold font-display2">kkimeang@gmail.com</p>
        </div>
    </div>
  )
}

export default ContactP
