import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  const headerLink = [
    { text: "Home", id: 1, url: "/" }, 
    { text: "Blogs", id: 2, url: "/blog" },
    { text: "Contact", id: 3, url: "/contact" },
    { text: "About us", id: 4, url: "/about" },
  ];
  return (
    <div className="md:px-8 bg-forthPrimary pt-3 md:py-4 lg:py-6 border-b-[2px] border-black flex items-center text-center justify-between p-3">
      <Link to="/" className="text-sm sm:text-lg font-bold pt-1 font-display2 md:text-2xl lg:text-3xl xl:text-4xl">Dealiest Blog</Link>
      <ul className="">
        <li className="">
          {headerLink.map((link) => (
            <Link key={link.id} to={link.url} smooth className="text-xs md:bg-black md:text-white md:hover:bg-white md:hover:text-black px-1 font-semibold font-display md:mr-2 md:px-5 md:text-sm md:py-2 lg:mr-4 lg:px-6 lg:py-2 xl:mr-4 xl:text-lg xl:px-8 xl:py-3 md:border-black md:border-[1px] rounded-full">
              {link.text}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Header;
