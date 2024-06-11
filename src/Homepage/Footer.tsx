import React from 'react';
import IC3 from '../images/IC3.jpg';
import IC5 from '../images/IC5.jpg';
import IC6 from '../images/IC6.jpg';

function Footer() {
  const imageFiles = [IC3, IC5, IC6];

  return (
    <div className="flex gap-5 container">
      {imageFiles.map((image, i) => (
        <a target="_blank" className="w-10 h-10 transition items-center ease-in-out delay-100 rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-300 text-center">
          <img src={image} key={i} alt="image" className="rounded-full " />
        </a>
      ))}
    </div>
  );
}

export default Footer;
