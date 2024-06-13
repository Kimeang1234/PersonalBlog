import React from 'react'

function Header() {
  const headerLink = [
    { text: "Home", id: 1, url: "/home" },
    { text: "Blog", id: 2, url: "/blog" },
    { text: "About", id: 3, url: "/about" },
    { text: "Contact", id: 4, url: "/#" },
  ]

  return (
    <div className=" md:px-8 lg:px-10 pt-3 xl:px-12 md:py-4 lg:py-6 border-b-[2px] flex items-center text-center justify-between p-3">
      <a href="#" className="text-lg font-bold font-display2 md:text-2xl lg:text-3xl xl:text-4xl">Dealiest Blog</a>
      <nav className="">
        {headerLink.map((link) => (
          <a href={link.url} target='_blank' key={link.id} className=" font-display3 lg:text-2xl xl:text-2xl xl:px-7 xl:py-3 lg:px-5 md:text-lg md:px-3 font-semibold px-1 rounded-md hover:bg-gray-100">
            {link.text}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Header
