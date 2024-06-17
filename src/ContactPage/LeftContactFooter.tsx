import React from 'react'
import grayball from '../images/grayball.jpg'
function LeftContactFooter() {
    const ContactText = [
        {
          Uppertext: "We're just one click away to help you take your brand or product from great to incredible. Fill in the form to share more details about your project.",
          image: grayball,
          LowerTitle: "Hi, I’m Vince! Let’s chat about your amazing ideas and projects.",
          LowerText: "I enjoy translating your thoughts to our diversely skilled team for the best results",
        },]
  return (
    <div className='block lg:w-1/2 lg:px-20'>
        {ContactText.map((ContactT, i) => (
  <ul key={i}>
    <li className='justify-start border-r-[3px] border-black'>
      <div className='md:w-1/2'>
        <p className='lg:text-2xl pb-10'>{ContactT.Uppertext}</p>
        <img src={ContactT.image} alt="Portrait of Chhon Kimeang." className='w-12 h-12 rounded-full' />
        <h2 className='pt-1 md:pt-3 lg:text-2xl'>{ContactT.LowerTitle}</h2>
        <p className="md:text-lg md:pt-3">"{ContactT.LowerText}"</p>
        <button className=" font-bold pt-3 font-display">Email Eang Directly</button>
      </div>
    </li>
  </ul>
))}
    </div>
  )
}

export default LeftContactFooter
