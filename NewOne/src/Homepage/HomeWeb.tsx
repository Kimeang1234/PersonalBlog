import React from 'react';
import Header from './Header'; // Assuming this component contains the header content
import backgroundImage from '../images/P2.jpg';
import EditedBG from '../images/EditedBg.mp4'

import { Link } from 'react-router-dom';
import Blogfooter from 'BlogPage/Blogfooter';

function HomeWeb() {
  return (
    <div className="marquee overflow-hidden">
      <Header /> 
      <div className="min-h-screen flex flex-col items-center bg-auto xl:bg-center justify-center py-16 relative">
        <video
          className="absolute object-cover top-0 left-0 w-full h-full z-[-1]"
          src={EditedBG}
          autoPlay
          loop
          muted
        />
        <div className="text-center px-4">
          <h1 className="font-display2 font-bold px-2 text-3xl md:text-5xl">Welcome to my blog post</h1>
          <h2 className="text-base px-2 md:text-2xl font-display lg:text-3xl md:px-4 pt-10">Hello, welcome y'all, nice to see you here. Thanks for visiting this blog.</h2>
          <div className="pt-12 md:pt-16 flex justify-center">
            <Link to="/blog" className="px-5 transition delay-150 duration-300 ease-in-out py-3 2xl:py-4 2xl:px-8 2xl:text-2xl font-semibold md:text-xl font-display2 rounded-lg bg-black hover:bg-white hover:text-black text-white shadow-lg">
              Read more
            </Link>
          </div>
        </div>
      </div>
      <Blogfooter />
    </div>
  );
}

export default HomeWeb;
