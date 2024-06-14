import React from 'react'
import grayball from '../images/grayball.jpg'
import Blogfooter from './Blogfooter'
import Header from 'Homepage/Header'
import backgroundImage from '../images/P2.jpg'
function Blogweb() {
  const blogposts = [
    {
      title: "How to make a website",
      author: "<NAME>",
      date: "2021-05-01",
      id: 1,
      content: "This is a blog post about how to make a website, This is a blog post about how to make a website, This is a blog post about how to make a website",
      image: grayball,
      url: "www.example.com",
    },
    {
      title: "How to make a website",
      author: "<NAME>",
      date: "2021-05-01",
      id: 2,
      content: "This is a blog post about how to make a website, This is a blog post about how to make a website, This is a blog post about how to make a website",
      image: grayball,
      url: "www.example.com",
    },
    {
      title: "How to make a website",
      author: "<NAME>",
      date: "2021-05-01",
      id: 3,
      content: "This is a blog post about how to make a website, This is a blog post about how to make a website, This is a blog post about how to make a website",
      image: grayball,
      url: "www.example.com",
    },
    {
      title: "How to make a website",
      author: "<NAME>",
      date: "2021-05-01",
      id: 4,
      content: "This is a blog post about how to make a website, This is a blog post about how to make a website, This is a blog post about how to make a website",
      image: grayball,
      url: "www.example.com",
    },
    {
      title: "How to make a website This is a blog post about how to make a website",
      author: "<NAME>",
      date: "2021-05-01",
      id: 5,
      content: "  This is a blog post about how to make, This is a blog post about how to make, This is a blog post about how to make, This is a blog post about how to make, This is a blog post about how to make, This is a blog post about how to make, This is a blog post about how to make, This is a blog post about how to make, This is a blog post about how to make a website",
      image: grayball,
      url: "www.example.com",
    },
    {
      title: "How to make a website",
      author: "<NAME>",
      date: "2021-05-01",
      id: 6,
      content: "This is a blog post about how to make a website, This is a blog post about how to make a website, This is a blog post about how to make a website",
      image: grayball,
      url: "https://www.facebook.com/",
    },
  ]

  return (
    <div className=" bg-gray-50 bg-cover min-h-screen">  
    <Header />
      <div className=" pt-10 bg-cover pb-10">
        <h1 className="text-center pb-10 font-semibold font-display3 text-2xl md:text-3xl lg:text-4xl">What to read next</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20"> 
          {blogposts.map((blogs) => (
              <a href={blogs.url} target="_blank">
                <ul key={blogs.id} className="p-3">
                  <li className=" bg-gray-100 rounded-3xl">
                    <img className="rounded-t-3xl w-full" src={blogs.image} alt="blog" />
                    <div className="p-6 lg:p-8 xl:p-10">
                      <h1 className="font-semibold line-clamp-1 font-display3 text-xl md:text-2xl lg:text-3xl hover:underline">{blogs.title}</h1>
                      <p className=" line-clamp-3 pt-5 text-base md:text-lg font-display5 lg:text-xl">{blogs.content}</p>
                    </div>
                  </li>
                </ul>
              </a>
            ))}
        </div>
        <div className="p-6 md:p-10">
        <section className="block bg-gray-50 bg-cover text-center mx-auto lg:w-1/2 p-4 h-auto border-t-[10px] border-[1px] border-black">
          <h1 className="text-xl md:text-3xl 2xl:text-4xl md:pt-5 pb-3 lg:pt-10 font-bold">Sign up for the newsletter</h1>
          <h2 className="text-base md:text-xl 2xl:pt-5 px-3 pb-6 pt-3">Sign up your email here to keep update on lastest news about technology.</h2>
          <div className="flex md:pt-5 pb-4 md:pb-6 justify-center md:text-xl">
            <input className="p-2 border-[1px] xl:px-5 border-black" type="text" placeholder="Email address" />
            <button className="px-2 border-black bg-black xl:px-5 hover:bg-white hover:text-black text-white border-[2px]">Sign Up</button>
          </div>
        </section>
      </div>
      </div>
      <footer className="pt-10 marquee overflow-hidden">
        <Blogfooter />
      </footer>
    </div>
  )
}

export default Blogweb
