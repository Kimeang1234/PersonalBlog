import React from 'react'
import Header from './Header'

function HomeWeb() {
  return (
    <div className="">
      <Header />
    <div className="min-h-screen flex flex-col items-center justify-center py-16">

      <div className="text-center px-4">
        <h1 className="font-semibold text-3xl md:text-5xl font-display">Welcome to my blog post</h1>
        <h2 className="text-base md:text-2xl pt-8">Hello, welcome y'all, nice to see you here. Thanks for visiting this blog.</h2>
        <div className=" pt-12 md:pt-16 flex justify-center">
          <a href="#" target="_blank" className="px-5 py-3 md:text-xl rounded-lg border border-gray-200 hover:bg-gray-200 shadow-lg">See more</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HomeWeb;
