import React from 'react';
import Header from './Header';
import backgroundImage from '../images/P2.jpg'; 
import { Link } from 'react-router-dom';

function HomeWeb() {
  return (
    <div className="">
      <Header />
      <div className="min-h-screen flex flex-col items-center bg-auto xl:bg-center justify-center py-16" style={{ backgroundImage: `url(${backgroundImage})`, }}>
        <div className="text-center px-4">
          <h1 className="font-display2 font-bold px-2 text-3xl md:text-5xl">Welcome to my blog post</h1>
          <h2 className="text-base px-2 md:text-2xl font-display lg:text-3xl md:px-4 pt-10">Hello, welcome y'all, nice to see you here. Thanks for visiting this blog.</h2>
          <div className=" pt-12 md:pt-16 flex justify-center">
            <Link to="/blog" className="px-5 py-3 2xl:py-4 2xl:px-8 2xl:text-2xl font-semibold md:text-xl font-display2 rounded-lg bg-black hover:bg-white hover:text-black text-white shadow-lg">
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeWeb;
