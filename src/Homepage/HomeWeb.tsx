import React from 'react'
import Header from './Header'
// import Footer from './Footer'

function HomeWeb() {
    return (
      <div className="min-h-screen bg-cover flex flex-col">
        <Header />
        <div className="md:w-1/2 mx-auto text-center pt-10 xl:pt-48">
          <h1 className="p-4 text-lg font-bold md:text-5xl">Hello, welcome to my Blog Page. I bet you all gonna be supprised when you find out what I've built in this blog.</h1>
          <h2 className=" p-4 text-sm md:text-xl pt-14">You will see the react why you have to learn more from this.</h2>
          <div className="justify-center md:pt-28 flex text-xl xl:pt-20 xl:text-3xl">
            <a href="#" target="_blank" className="border-[1px] rounded-full hover:bg-primary md:px-6 md:py-3 px-4 py-1 xl:px-8 xl:py-2 ">See more</a>
          </div>
        </div>
      </div>
    );
  }

export default HomeWeb;
  