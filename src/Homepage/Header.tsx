import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headerLink = [
    { text: "Home", id: 1, url: "/" }, 
    { text: "Blog", id: 2, url: "/blog" },
    { text: "About", id: 3, url: "/about" },
    { text: "Contact", id: 4, url: "/contact" },
  ];

  return (
    <div className="md:px-8 lg:px-10 pt-3 xl:px-12 md:py-4 lg:py-6 border-b-[2px] flex items-center text-center justify-between p-3">
      <Link to="/" className="text-lg font-bold font-display2 md:text-2xl lg:text-3xl xl:text-4xl">Dealiest Blog</Link>
      <ul className="">
        <li className="">
          {headerLink.map((link) => (
            <Link
              key={link.id}
              className="hover:underline hover:delay-500 font-display3 lg:text-2xl xl:text-2xl xl:px-7 xl:py-3 lg:px-5 md:text-lg md:px-3 font-semibold px-1 rounded-md"
              to={link.url}
            >
              {link.text}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Header;
