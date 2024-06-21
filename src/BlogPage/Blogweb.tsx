import React from 'react'
import grayball from '../images/grayball.jpg'
import Blogfooter from './Blogfooter'
import { Link } from 'react-router-dom'
import Header from 'Homepage/Header'
import Firstcard from './Firstcard'
import Secondcard from './Secondcard'
import Fourthcard from './Fourthcard'
import Thirdcardd from './Thirdcardd'
import Fifthcard from './Fifthcard'
import Sixthcard from './Sixthcard'
function Blogweb() {
  const blogposts = [
    {
      title: "Exploring Cloud Computing",
      date: "2021-05-01",
      id: 1,
      content: "Dive into the world of cloud computing and discover its significance in modern IT infrastructure. Learn about various cloud service models (IaaS, PaaS, SaaS) and major cloud providers like AWS, Azure, and Google Cloud. Understand how cloud computing enhances scalability, flexibility, and cost-efficiency for businesses.",
      image: grayball,
      url: "/Exploring-Cloud-Computing",
    },
    {
      title: "Introduction to Cybersecurity",
      date: "2021-05-01",
      id: 2,
      content: "Understand the basics of cybersecurity and its importance in protecting sensitive information and systems. Explore key concepts such as encryption, firewalls, intrusion detection systems, and best practices for maintaining security. Learn about the common threats and vulnerabilities and how to safeguard against them.",
      image: grayball,
      url: "/Introduction-to-Cybersecurity",
    },
    {
      title: "The Fundamentals of Networking",
      author: "<NAME>",
      date: "2021-05-01",
      id: 3,
      content: "Gain a solid foundation in networking principles, including the OSI model, TCP/IP protocols, and network topologies. Learn about essential networking hardware like routers, switches, and modems, as well as wireless networking technologies. Discover how networking enables seamless communication and data transfer within and between organizations.",
      image: grayball,
      url: "/The-Fundamentals-Of-Networking",
    },
    {
      title: "Basics of Database Management",
      author: "<NAME>",
      date: "2021-05-01",
      id: 4,
      content: "Delve into the world of databases and their critical role in storing and managing data. Learn about relational databases, SQL, and NoSQL databases, and understand how to design and query databases effectively. Explore database management systems (DBMS) and their applications in real-world scenarios.",
      image: grayball,
      url: "/Basics-of-Databse-Management",
    },
    {
      title: "Introduction to Programming and Software Development",
      author: "<NAME>",
      date: "2021-05-01",
      id: 5,
      content: "Embark on your journey into programming by learning fundamental concepts like algorithms, data structures, and object-oriented programming. Explore popular programming languages such as Python, Java, and JavaScript, and understand the software development lifecycle (SDLC) from requirements gathering to deployment and maintenance.",
      image: grayball,
      url: "/Introduction-to-Programming",
    },
    {
      title: "Understanding IT Project Management",
      author: "<NAME>",
      date: "2021-05-01",
      id: 6,
      content: "Discover the essentials of IT project management and how to successfully plan, execute, and monitor IT projects. Learn about project management methodologies like Agile, Scrum, and Waterfall, and understand the importance of time, cost, and quality management. Gain insights into risk management and effective communication strategies within project teams.",
      image: grayball,
      url: "/Understanding-It-Project",
    },
  ]

  return (
    <div className="">
      <Header />
      <div className=" min-h-screen pt-10 bg-cover pb-10">
        <h1 className="text-center pb-10 font-semibold font-display5 text-2xl md:text-3xl lg:text-4xl">What to read next</h1>
        <div className="grid xl:px-52 2xl:px-96 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-8 lg:px-12">
          {blogposts.map((blogs) => (
            <ul key={blogs.id} className="p-3">
              <Link to={blogs.url} key={blogs.id}>
                <li className="rounded-xl shadow-2xl hover:shadow-2xl hover:shadow-black bg-none">
                  <img className="rounded-t-xl" src={blogs.image} alt="blog" />
                  <div className="pb-3">
                    <h1 className="pl-2 pt-3 font-display3 font-semibold line-clamp-1 text-xl md:text-2xl hover:underline">{blogs.title}</h1>
                    <p className=" line-clamp-2 pr-1 text-balance pl-3 pt-5 text-sm sm:text-lg md:text-lg font-display5 lg:text-xl">{blogs.content}</p>
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
