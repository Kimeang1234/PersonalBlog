import React from 'react'

function RightContactFooter() {
  return (
    <div className="grid grid-cols-1 px-6 lg:text-lg w-1/2">
      <div className=" flex flex-row">
        <div className=" flex-grow mr-2">
          <h1 className="lg:pb-2 lg:pl-6">Last Name:</h1>
          <input placeholder='Enter your first name' className='2xl:pl-5 2xl:py-5 w-full flex-grow border-[1px] border-black rounded-full'></input>
        </div>
          <div className="flex-grow">
            <h2 className="lg:pb-2 lg:pl-6">First Name:</h2>
            <input placeholder='Enter your last name' className="2xl:pl-5 2xl:py-5 w-full flex-grow border-[1px] border-black rounded-full"></input>
          </div>
      </div>
          <div>
            <h3 className="lg:pb-2 lg:pl-6">Your email:</h3>
            <input placeholder='Enter your email address' className="2xl:pl-5 2xl:py-5 w-full border-[1px] border-black rounded-full"></input>
          </div>
            <div className="">
              <h4 className="lg:pb-2 lg:pl-6">Tell us more your project goals:</h4>
              <input className="2xl:pl-5 2xl:py-5 border-[1px] border-black rounded-full w-full" placeholder="e.g. We'd like to rebrand & improve our marketing website and platform."></input>
            </div>
            <div className="flex">
        <button type="submit" className="">
          Send
        </button>
      </div>
    </div>

  )
}

export default RightContactFooter
