import React from 'react'

function Header() {
  const headerLink = [
    { text: "Home", id: 1, url: "https://exmaple.com" },
    { text: "Blog", id: 2, url: "https://facebook.com" },
    { text: "About me", id: 3, url: "https://tiktok.com" },
    { text: "Contact", id: 4, url: "https://twitter.com" }
  ]

  return (
    <div className="justify-between xl:py-2 xl:px-8 align-middle items-center border-b-[1px] flex">
      <h1 className=" p-3 xl:text-3xl text-md font-bold">Dealiest Blog</h1>
      <div className="flex gap-3 md:gap-5 pr-3 md:pr-6 list-none">
        {headerLink.map((link) => (
         <a href={link.url} target='_blank' key={link.id} className=" text-center text-sm xl:text-lg xl:px-6 xl:py-4 transition items-center ease-in-out delay-100 rounded-full xl:hover:-translate-y-1 xl:hover:scale-110 xl:hover:bg-primary xl:duration-300"> 
         {link.text}
       </a>       
        ))}
      </div>
    </div>
  )
}

export default Header
