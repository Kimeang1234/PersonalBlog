// import React from 'react'
// import Header from 'Homepage/Header'
// function ContactP() {
//   return (
//     <div className=" min-h-screen bg-cover">
//         <div>
//             <Header />
//         </div>
//         <div className=" mx-auto p-3 md:w-1/2 text-center pt-20">
//             <h1 className='pb-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Contact us</h1>
//             <p className="text-base md:text-lg lg:text-2xl xl:text-3xl font-display3">Hi there, I'm Chhon KimEang. We're dedicated to helping businesses like yours achieve a marketing automation SaaS like reaching more customers and grow your sales. If you're interested in a demo or have any questions, feel free to shoot me an email at</p>
//             <p className="pt-10 text-xl md:text-2xl lg:text-3xl font-bold font-display2">kkimeang@gmail.com</p>
//         </div>
//         <div className="p-6 md:p-10">
//           <section className="block bg-gray-50 bg-cover text-center mx-auto lg:w-1/2 p-4 h-auto border-t-[10px] border-[1px] border-black">
//             <h1 className="text-xl md:text-3xl 2xl:text-4xl md:pt-5 pb-3 lg:pt-10 font-bold">Sign up for the newsletter</h1>
//             <h2 className="text-base md:text-xl 2xl:pt-5 px-3 pb-6 pt-3">Sign up your email here to keep update on lastest news about technology.</h2>
//             <div className="flex md:pt-5 pb-4 md:pb-6 justify-center md:text-xl">
//               <input className="p-2 border-[1px] xl:px-5 border-black" type="text" placeholder="Email address" />
//               <button className="px-2 border-black bg-black xl:px-5 hover:bg-white hover:text-black text-white border-[2px]">Sign Up</button>
//             </div>
//           </section>
//         </div>
//     </div>
//   )
// }

// export default ContactP

import React from 'react'
import Header from 'Homepage/Header'
import Contactfooter from './Contactfooter'

function ContactP() {
  return (
    <div className="flex flex-col bg-cover">
      <Header />
        <div className="md:min-h-screen mx-auto md:mx-0 md:justify-start pt-10 text-2xl w-1/3 text-center font-semibold 2xl:pl-20 md:flex-grow md:flex md:items-center ">
          <h1 className='2xl:text-8xl font-semibold font-display md:w-1/3'>
            Let’s blow (speech) bubbles
          </h1>
        </div>
      <Contactfooter />
    </div>
  )
}

export default ContactP
