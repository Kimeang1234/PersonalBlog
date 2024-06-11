import React from 'react'

function Header() {
  const headerLink = [
    { text: "Blog", id: 1, url: "/" },
    { text: "About", id: 2, url: "/" },
    { text: "Links", id: 3, url: "/" },
    { text: "Contact us", id: 4, url: "/" }
  ]

  return (
    <div className="justify-between pb-2 pt-2 pl-8 pr-8 items-center border-b-[1px] flex">
      <h1 className="text-3xl">Dealiest Blog</h1>
      <div className="flex gap-3 pr-5 list-none">
        {headerLink.map((link) => (
         <li key={link.id} className=" text-center  text-lg px-10 py-4 transition items-center ease-in-out delay-100 rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300"> 
         {link.text}
       </li>       
        ))}
      </div>
    </div>
  )
}

export default Header
