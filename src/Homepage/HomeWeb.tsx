import React from 'react'
import Header from './Header'
// import Footer from './Footer'

function HomeWeb() {
    return (
      <div className="min-h-screen xl:pt-2 bg-cover flex flex-col">
        <Header />
        <div className="md:w-1/2 mx-auto text-center pt-32 md:pt-48">
          <h1 className="px-5 text-lg font-bold md:text-3xl">Hello, welcome to my Blog Page. I bet you all gonna be supprised when you find out what I've built in this blog.</h1>
          <h2 className=" p-4 text-sm md:text-2xl pt-14">You will see the react why you have to learn more from this.</h2>
          <div className=" pt-20 justify-center md:pt-28 flex text-xl xl:pt-20 md:text-xl">
            <a href="#" target="_blank" className=" border-[2px] px-5 py-3 rounded-lg hover:bg-gray-200 shadow-lg">See more</a>
          </div>
        </div>
      </div>
    );
  }

export default HomeWeb;
  