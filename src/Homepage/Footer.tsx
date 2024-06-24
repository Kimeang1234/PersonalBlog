import React from 'react';
import IC3 from '../images/IC3.jpg';
import IC5 from '../images/IC5.jpg';
import IC6 from '../images/IC6.jpg';
import { Link } from 'react-router-dom';
import Linkedin from '../images/Linkedin.jpg'

function Footer() {
  const blogposts = [
    {
      id: 1,
      image: Linkedin,
      url: "https://www.linkedin.com/in/kon-kh-9587b2315?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1xyuV2UGTQevgD35Emi6sg%3D%3D",
    },
    {
      id: 2,
      image: IC5,
      url: "https://t.me/AngDKraken",
    },
    {
      id: 3,
      image: IC3,
      url: "https://www.instagram.com/eangaintgoffy/",
    }, 
  ]

  return (
    <div className="flex gap-10 justify-center container">
      {blogposts.map((blog, i) => (
        <Link to={blog.url} className="w-10 h-10 transition items-center ease-in-out delay-100 rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-300 text-center">
          <img src={blog.image} key={i} alt="image" className="rounded-full " />
        </Link>
      ))}
    </div>
  );
}

export default Footer;
