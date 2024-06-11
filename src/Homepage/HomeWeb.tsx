import React from 'react'
import Header from './Header'
import Footer from './Footer'

function HomeWeb() {
    return (
      <div className="min-h-screen bg-cover bg-whtie flex flex-col">
        <Header />
        <div className="text-5xl w-1/2 text-center mx-auto pt-10 flex-1">
          <h1 className="p-1">Hello, welcome to my Blog Page.</h1>
          <h2 className="p-1">I bet y'all gonna find out what I've built</h2>
          <h2 className="p-1">in this blog.</h2>
          <div className="text-lg pt-10 w-1/3 mx-auto">
            You will see the react why you have to learn more from this.
          </div>
          <div className="justify-center flex pt-16 text-3xl">
            <button className="rounded-3xl bg-primary px-8 py-4">See more</button>
          </div>
        </div>
        <div className="pl-4 pb-3">
          {/* <Footer /> */}
        </div>
      </div>
    );
  }

export default HomeWeb;
  