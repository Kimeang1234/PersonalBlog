import React, { useEffect } from 'react'
import grayball from '../images/grayball.jpg'
import Blogfooter from './Blogfooter'
import { Link } from 'react-router-dom'
import Header from 'Homepage/Header'
import CloudComputing from '../images/Cloudcomputing.jpg'
import CyberPic from '../images/Cyber.jpg'
import NetworkPic2 from '../images/network(3).jpg'
import DataBasePic2 from '../images/database(2).jpg'
import ProgramingPic4 from '../images/Program.webp'
import PorjectManage from '../images/ProjectManagement.jpg'

function Blogweb() {
  const blogposts = [
    {
      title: "Exploring Cloud Computing",
      date: "2021-05-01",
      id: 1,
      content: "Dive into the world of cloud computing and discover its significance in modern IT infrastructure. Learn about various cloud service models (IaaS, PaaS, SaaS) and major cloud providers like AWS, Azure, and Google Cloud. Understand how cloud computing enhances scalability, flexibility, and cost-efficiency for businesses.",
      image: CloudComputing,
      url: "/Exploring-Cloud-Computing",
    },
    {
      title: "Exploring Cloud Computing",
      date: "2021-05-01",
      id: 1,
      content: "Dive into the world of cloud computing and discover its significance in modern IT infrastructure. Learn about various cloud service models (IaaS, PaaS, SaaS) and major cloud providers like AWS, Azure, and Google Cloud. Understand how cloud computing enhances scalability, flexibility, and cost-efficiency for businesses.",
      image: CloudComputing,
      url: "/Exploring-Cloud-Computing",
    },
    {
      title: "Exploring Cloud Computing",
      date: "2021-05-01",
      id: 1,
      content: "Dive into the world of cloud computing and discover its significance in modern IT infrastructure. Learn about various cloud service models (IaaS, PaaS, SaaS) and major cloud providers like AWS, Azure, and Google Cloud. Understand how cloud computing enhances scalability, flexibility, and cost-efficiency for businesses.",
      image: CloudComputing,
      url: "/Exploring-Cloud-Computing",
    },
    {
      title: "Exploring Cloud Computing",
      date: "2021-05-01",
      id: 1,
      content: "Dive into the world of cloud computing and discover its significance in modern IT infrastructure. Learn about various cloud service models (IaaS, PaaS, SaaS) and major cloud providers like AWS, Azure, and Google Cloud. Understand how cloud computing enhances scalability, flexibility, and cost-efficiency for businesses.",
      image: CloudComputing,
      url: "/Exploring-Cloud-Computing",
    },
    {
      title: "Exploring Cloud Computing",
      date: "2021-05-01",
      id: 1,
      content: "Dive into the world of cloud computing and discover its significance in modern IT infrastructure. Learn about various cloud service models (IaaS, PaaS, SaaS) and major cloud providers like AWS, Azure, and Google Cloud. Understand how cloud computing enhances scalability, flexibility, and cost-efficiency for businesses.",
      image: CloudComputing,
      url: "/Exploring-Cloud-Computing",
    },
    {
      title: "Exploring Cloud Computing",
      date: "2021-05-01",
      id: 1,
      content: "Dive into the world of cloud computing and discover its significance in modern IT infrastructure. Learn about various cloud service models (IaaS, PaaS, SaaS) and major cloud providers like AWS, Azure, and Google Cloud. Understand how cloud computing enhances scalability, flexibility, and cost-efficiency for businesses.",
      image: CloudComputing,
      url: "/Exploring-Cloud-Computing",
    },
  ]

  return (
    <div className="">
      <Header />
      <div className="min-h-screen pt-10 640px bg-gray-50 bg-cover pb-10">
        <h1 className="text-center pb-10 font-semibold font-display5 text-2xl md:text-3xl lg:text-4xl">What to read next</h1>
        <div className="sm:w-[500px] lg:w-[1100px] xl:w-[1300px] 2xl:w-[1700px] md:w-[640px] mx-auto grid xl:px-52 2xl:px-96 md:grid-cols-2 lg:grid-cols-3 px-5 sm:px-16 lg:px-36">
          {blogposts.map((blogs) => (
            <ul key={blogs.id} className="p-3">
              <Link to={blogs.url} key={blogs.id}>
                <li className="rounded-xl mx-auto bg-white shadow-2xl hover:shadow-2xl hover:shadow-black bg-none">
                  <img className="rounded-t-xl sm:h-[190px] md:h-[132px] lg:h-[152px] w-full h-[200px]" src={blogs.image} alt="blog" />
                  <div className="px-5 py-8">
                    <h1 className="text-xl xl:text-2xl hover:underline line-clamp-1">{blogs.title}</h1>
                    <p className=" text-lg pt-4 line-clamp-3">{blogs.content}</p>
                  </div>
                </li>
              </Link>
            </ul>
          ))}
        </div>
        <div className="p-6 md:p-10">
          <section className="block bg-gray-50 bg-cover text-center mx-auto lg:w-1/2 p-4 h-auto border-t-[10px] border-[1px] border-black">
            <h1 className="text-xl md:text-3xl 2xl:text-4xl md:pt-5 pb-3 lg:pt-10 font-bold">Sign up for the newsletter</h1>
            <h2 className="text-base md:text-xl 2xl:pt-5 px-3 pb-6 pt-3">Sign up your email here to keep update on lastest news about technology.</h2>
            <div className="flex text-xs md:pt-5 pb-4 md:pb-6 justify-center md:text-xl">
              <input className="p-2 border-[1px] xl:px-5 border-black" type="text" placeholder="Email address" />
              <button className=" border-black bg-black xl:px-5 hover:bg-white hover:text-black text-white border-[2px]">Sign Up</button>
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
