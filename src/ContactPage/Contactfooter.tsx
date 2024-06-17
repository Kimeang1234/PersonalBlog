import React from 'react'
import RightContactFooter from './RightContactFooter'
import LeftContactFooter from './LeftContactFooter'
function Contactfooter() {
  return (
    <div className="block md:flex md:py-10 md:flex-col-1 md:pb-20 pt-10 px-5">
      <LeftContactFooter />
      <RightContactFooter />
    </div>
  )
}

export default Contactfooter
