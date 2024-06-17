import React from 'react'
import grayball from '../images/grayball.jpg'
function LeftContactFooter() {
  const ContactText = [
    {
      Uppertext: "We're just one click away to help you take your brand or product from great to incredible. Fill in the form to share more details about your project.",
      image: grayball,
      LowerTitle: "Hi, I’m Lisa! Let’s chat about your amazing ideas and projects.",
      LowerText: "I enjoy translating your thoughts to our diversely skilled team for the best results",
    },]
  return (
    <div className='block lg:w-1/2 lg:px-20'>
      {ContactText.map((ContactT, i) => (
        <ul key={i}>
          <li className='justify-start border-r-[3px] border-black'>
            <div className='xl:w-1/2'>
              <p className=' text-lg xl:text-2xl pb-10'>{ContactT.Uppertext}</p>
              <img src={ContactT.image} alt="Portrait of Chhon Kimeang." className='w-12 h-12 rounded-full' />
              <h2 className='pt-1 text-lg xl:pt-3 xl:text-2xl font-semibold'>{ContactT.LowerTitle}</h2>
              <p className="xl:text-lg xl:pt-3">"{ContactT.LowerText}"</p>
              <button className=" font-bold pt-3 font-display">Email Eang Directly</button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default LeftContactFooter
