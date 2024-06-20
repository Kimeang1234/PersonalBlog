import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  const headerLink = [
    { text: "Home", id: 1, url: "/" }, 
    { text: "Blog Post", id: 2, url: "/blog" },
    { text: "About us", id: 3, url: "/about" },
    { text: "Hire us", id: 4, url: "/contact" },
  ];
  return (
    <div className="md:px-8 bg-forthPrimary pt-3 md:py-4 lg:py-6 border-b-[2px] border-black flex items-center text-center justify-between p-3">
      <Link to="/" className=" text-base sm:text-lg font-bold pt-1 font-display2 md:text-2xl lg:text-3xl xl:text-4xl">Dealiest Blog</Link>
      <ul className="">
        <li className="">
          {headerLink.map((link) => (
            <Link key={link.id} to={link.url} smooth className="text-sm hover:shadow-2xl hover:bg-black md:hover:no-underline lg:hover:shadow-black hover:underline bg-white text-black lg:hover:text-white mr-1 px-1 sm:border-[1px] sm:px-4 sm:mr-1 sm:py-1 sm:text-base md:border-[1px] md:mr-1 lg:mr-2 xl:mr-3 font-display3 lg:text-2xl xl:text-2xl xl:px-10 xl:py-3 lg:px-5 md:text-base md:px-6 md:py-3 font-semibold rounded-full border-black sm:transition sm:delay-150 duration-300 ease-in-out">
              {link.text}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Header;
