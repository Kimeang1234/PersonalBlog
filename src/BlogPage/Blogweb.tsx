import React from 'react'
import grayball from '../images/grayball.jpg'
import Blogfooter from './Blogfooter'
import Pchhor from '../images/Pchhor.jpg'



function Blogweb() {
const blogposts = [
  {
    title: "How to make a website",
    author: "<NAME>",
    date: "2021-05-01",
    id: 1,
    content: "This is a blog post about how to make a website",
    image: grayball,
  },
  {
    title: "How to make a website",
    author: "<NAME>",
    date: "2021-05-01",
    id: 2,
    content: "This is a blog post about how to make a website",
    image: grayball,
  },
  {
    title: "How to make a website",
    author: "<NAME>",
    date: "2021-05-01",
    id: 3,
    content: "This is a blog post about how to make a website",
    image: grayball,
  },
  {
    title: "How to make a website",
    author: "<NAME>",
    date: "2021-05-01",
    id: 4,
    content: "This is a blog post about how to make a website",
    image: grayball,
  },
  {
    title: "How to make a website",
    author: "<NAME>",
    date: "2021-05-01",
    id: 5,
    content: "This is a blog post about how to make a website",
    image: grayball,
  },
  {
    title: "How to make a website",
    author: "<NAME>",
    date: "2021-05-01",
    id: 6,
    content: "This is a blog post about how to make a website",
    image: grayball,
  },
]
  return (
    <div className="">
      {/* <Header /> */}
        <h1 className="text-center text-2xl pb-5 md:text-6xl xl:pt-10 md:pb-6">What to read next</h1>
      <div className="grid px-6 md:grid-cols-2 lg:grid-cols-3 pb-14 container mx-auto">
        {blogposts.map((blogs) => 
        <ul key={blogs.id} className="">
          <li className='px-2'>
          <img className='pb-2 pt-3' src={blogs.image} alt="blog"  />
          <h1 className=" px-2 text-center text-xl py-1 line-clamp-1 font-bold md:text-xl lg:text-3xl md:py-3 md:line-clamp-3">{blogs.title}</h1>
          <p className=' px-2 line-clamp-3 text-base pb-4 text-center lg:pb-3 md:text-base lg:text-2xl pt-1'>{blogs.content}</p>
          </li>
        </ul>)}
      </div>
      <div className="p-6">
        <section className='block text-center mx-auto p-4 h-auto border-t-[10px] border-[1px] border-black'>
          <h1 className=' text-xl md:text-3xl pb-3 font-bold'>Sign up for the newsletter</h1>
          <h2 className=' text-base md:text-xl px-3 pb-6 pt-3'>If you want to keep up to date with anything new, just sign up here. Also you can contact me.</h2>
          <div className='md:pt-10 pb-4'>
            <input className='border-[2px] p-2 md:px-8 border-black xl:pr-44 md:pl-2 md:py-3' type="text" placeholder="Email address" />
            <button className="text-white py-2 px-2 bg-black md:py-3 md:px-4 border-[2px] border-black">Sign Up</button>
          </div>
        </section>
      </div>
        <footer className='pt-20 marquee overflow-hidden'>
           <Blogfooter />
        </footer>
    </div>
  )
}

export default Blogweb
