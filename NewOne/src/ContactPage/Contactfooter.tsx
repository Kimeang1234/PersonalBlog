import React from 'react'
import RightContactFooter from './RightContactFooter'
import LeftContactFooter from './LeftContactFooter'
import Blogfooter from 'BlogPage/Blogfooter'
function Contactfooter() {
  return (
    <div className="">
      <div className="block xl:flex md:py-10 xl:flex-col-1 lg:px-20 md:pb-20 pt-10 px-5">
        <LeftContactFooter />
        <RightContactFooter />
      </div>
      <div className="marquee overflow-hidden">
        <Blogfooter />
      </div>
    </div>
  )
}

export default Contactfooter
