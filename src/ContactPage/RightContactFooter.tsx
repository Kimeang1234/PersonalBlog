import React from 'react'

function RightContactFooter() {
  return (
    <div className=" px-5 2xl:grid space-y-5 2xl:grid-cols-1 2xl:px-6 2xl:text-lg pt-10 2xl:w-1/2">
      <div className="2xl:flex 2xl:flex-row space-y-5">
        <div className="flex-grow mr-2 space-y-2">
          <h1 className="2xl:pb-2 2xl:pl-6">Last Name:</h1>
          <input placeholder='Enter your first name' className='px-5 py-3 2xl:pl-5 2xl:py-5 w-full flex-grow border-[1px] border-black rounded-full'></input>
        </div>
          <div className="flex-grow space-y-2">
            <h2 className="lg:pb-2 lg:pl-6">First Name:</h2>
            <input placeholder='Enter your last name' className="px-5 py-3 2xl:pl-5 2xl:py-5 w-full flex-grow border-[1px] border-black rounded-full"></input>
          </div>
      </div>
          <div className="space-y-2">
            <h3 className="lg:pb-2 lg:pl-6">Your email:</h3>
            <input placeholder='Enter your email address' className="px-5 py-3 2xl:pl-5 2xl:py-5 w-full border-[1px] border-black rounded-full"></input>
          </div>
            <div className="space-y-2">
              <h4 className="lg:pb-2 lg:pl-6">Tell us more your project goals:</h4>
              <input className="2xl:pl-5 2xl:py-5 border-[1px] border-black px-5 py-3 rounded-full w-full" placeholder="e.g. We'd like to rebrand & improve our marketing website and platform."></input>
            </div>
            <div className="flex justify-center pt-4 py-10">
        <button type="submit" className=" border-black border-[1px] hover:bg-black hover:text-white px-10 py-3 text-xl rounded-full">
          Send
        </button>
      </div>
    </div>
  )
}

export default RightContactFooter
