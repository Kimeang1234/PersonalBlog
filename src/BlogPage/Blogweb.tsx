import React from 'react'
import pexelBG from '../images/pexelBG.jpg'
import Blogfooter from './Blogfooter'

function Blogweb() {
const blogposts = [
  {
    title: "How to make a website",
    author: "<NAME>",
    date: "2021-05-01",
    id: 1,
    content: "This is a blog post about how to make a website",
    image: pexelBG,
  },
  {
    title: "How to make a website",
    author: "<NAME>",
    date: "2021-05-01",
    id: 2,
    content: "This is a blog post about how to make a website",
    image: pexelBG,
  },
  {
    title: "How to make a website",
    author: "<NAME>",
    date: "2021-05-01",
    id: 3,
    content: "This is a blog post about how to make a website",
    image: pexelBG,
  },
  {
    title: "How to make a website",
    author: "<NAME>",
    date: "2021-05-01",
    id: 4,
    content: "This is a blog post about how to make a website",
    image: pexelBG,
  },
  {
    title: "How to make a website",
    author: "<NAME>",
    date: "2021-05-01",
    id: 5,
    content: "This is a blog post about how to make a website",
    image: pexelBG,
  },
  {
    title: "How to make a website",
    author: "<NAME>",
    date: "2021-05-01",
    id: 6,
    content: "This is a blog post about how to make a website",
    image: pexelBG,
  },
]
  return (
    <div className="pb-2">
      {/* <Header /> */}
        <h1 className="text-center text-6xl pt-10 pb-6">What to read next</h1>
      <div className="grid grid-cols-3 pb-14 container mx-auto">
        {blogposts.map((blogs) => 
        <ul key={blogs.id} className="">
          <li className=' p-3 min-h-12 text-center'>
          <img src={blogs.image} alt="blog" className='pb-2' />
          <h1 className="text-center text-2xl pt-1">
          {blogs.title}{blogs.content}
          </h1>
          </li>
        </ul>)}
      </div>
        <section className=' block text-center mx-auto p-7 h-auto border-t-[10px] border-[1px] border-black w-1/3'>
          <h1 className='text-3xl pb-3'>Sign up for the newsletter</h1>
          <h2 className='text-xl px-3 pt-3'>If you want to keep up to date with anything new, just sign up here. Also you can contact me.</h2>
          <div className='pt-10 align-middle items-center pb-4'>
            <input className='border-[1px] border-black pr-44 pl-2 py-3' type="text" placeholder="Email address" />
            <button className="text-white bg-black py-3 px-8 border-[2px] border-black">Sign Up</button>
          </div>
        </section>
        <footer className='pt-20 marquee overflow-hidden'>
           <Blogfooter />
        </footer>
    </div>
  )
}

export default Blogweb
