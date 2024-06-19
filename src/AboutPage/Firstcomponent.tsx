import React from 'react';
import { Link } from "react-router-dom"

function Firstcomponent() {
  return (
    <div className="min-h-screen pt-10 px-6 sm:w-2/3 mx-auto">
      <div className="2xl:flex 2xl:flex-row">
        <div className="pr-5 border-t-[2px] 2xl:w-1/2 border-black ">
          <div className=" 2xl:text-3xl text-center md:text-start pt-5 2xl:py-5 font-semibold text-thirdPrimary">ABOUT</div>
          <h1 className='2xl:text-lg'>
            I am <span className=" font-semibold text-xl">Chhon KimEang</span>, web designers, and WordPress developers. We have been working with WordPress for over ten years, and from the beginning we operate in the IT consultancy industry (specifically in the WordPress ecosystem). You can find us at Lime Street helping WordPress users with any issue they have. We have many years of experience in making websites & plugins for clients from around the world. We are Trusted Authors and members of the Theme Review Team at wordpress.org. <span className=" font-semibold"> We create free WordPress themes </span> and plugins all available in the wordpress.org directory.
          </h1>
        </div>
        <h2 className="2xl:pl-5 2xl:text-2xl pb-10 pt-20 2xl:w-full">
            <div className="font-semibold">Our Mission: Helping WordPress Users / WordPress Business Owners Grow. </div> <div className="pb-10 pt-5"> To help Small WordPress Business owners with all the knowledge/information they need to tackle WordPress Website challenges. We know the challenges every Business owner faces in the start, we know how tedious it is to handle WordPress technical issues along with managing other business operations. We don’t promise you everything, but we promise you the best. </div> <div className="font-semibold pb-5"> Our Values: Honesty and Hard Work. </div> <div className="pb-10"> We love our work and the independence associated with it, which gives us the freedom to act in following with what we believe. </div> <div className="pb-10"> We practice ethical design; it is essential to us. Our obligation as the ones who build products is using best practices for ethical design. Why? The answer is simple. We want to live in a more ethical future, where transparency and honesty come first. We believe that everything we do shapes and changes life for better or for worse. We choose better. </div> <div className="pb-5 font-semibold"> Our Story </div> <div className="pb-10"> We’re a dynamic duo of web designers and WordPress wizards. For over a decade, we’ve been immersed in the exciting world of WordPress, crafting digital wonders and providing expert guidance to users far and wide. From the outset, we’ve been weaving our magic in the realm of IT consultancy, specializing in all things WordPress. </div> <div> You can catch us in action on Lime Street, where we’re always ready to lend a helping hand to fellow WordPress enthusiasts facing any tech conundrum. With our wealth of experience, we’ve had the pleasure of crafting stunning websites and nifty plugins for clients spanning the globe. </div> But that’s not all! We’re proud to hold the title of Trusted Authors and are esteemed members of the Theme Review Team over at wordpress.org. Our passion for WordPress extends beyond our consultancy work, as we pour our creativity into crafting free themes and plugins, all available in the wordpress.org directory. To fuel our passion and bring our dreams to life, we founded a humble little company called DK. With our skills, dedication, and a sprinkle of creativity, we’re on a mission to make the web a more beautiful and functional place. <div className="py-10"> What else about us? We love mountains, nature, silence, and challenges in the same way as we love open source, open network, and WordPress. </div>
            
            <div className="flex flex-col">
              <p className='font-semibold pb-1 pt-10 text-thirdPrimary'>Connect With Us</p>
              <Link to="/" className="underline">For General Information</Link>
              <Link to="/" className="underline">PRIVACY POLICY</Link>
            </div>
        </h2>
      </div>
    </div>
  ); 
}

export default Firstcomponent;
