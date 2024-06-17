import React from 'react'
import RightContactFooter from './RightContactFooter'
import LeftContactFooter from './LeftContactFooter'
function Contactfooter() {
  return (
    <div className=" flex py-10 flex-col-1 pb-20">
      <LeftContactFooter />
      <RightContactFooter />
    </div>
  )
}

export default Contactfooter
