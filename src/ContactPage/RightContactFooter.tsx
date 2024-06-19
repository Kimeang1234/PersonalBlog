import React from 'react'

function RightContactFooter() {
  return (
    <div className=" px-5 xl:border-l-2 border-black md:px-6 text-base md:text-lg w-full space-y-5">
      <div className="space-y-5">
        <div className="flex-grow mr-2 space-y-2">
          <h1 className="pb-2 pl-2 md:pl-6">First Name:</h1>
          <input placeholder='Enter your first name' className='px-5 py-3 w-full border border-black rounded-full'></input>
        </div>
        <div className="flex-grow mr-2 space-y-2">
          <h1 className="pb-2 pl-2 md:pl-6">Last Name:</h1>
          <input placeholder='Enter your last name' className='px-5 py-3 w-full border border-black rounded-full'></input>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="pb-2 pl-2 md:pl-6">Your email:</h3>
        <input placeholder='Enter your email address' className="px-5 py-3 w-full border border-black rounded-full"></input>
      </div>
      <div className="space-y-2">
        <h4 className="pb-2 pl-2 md:pl-6">Tell us more about your project goals:</h4>
        <input className="pb-16 rounded-2xl px-5 py-3 border border-black w-full" placeholder="e.g. We'd like to rebrand & improve our marketing website and platform."></input>
      </div>
      <div className="flex justify-center pt-4 py-10">
        <button type="submit" className="border-black border hover:bg-black hover:text-white px-8 text-base py-2 rounded-full">
          Send
        </button>
      </div>
    </div>
  )
}

export default RightContactFooter
