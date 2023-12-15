import React from 'react'
import item1 from '../assets/item1.jpeg'
import item2 from '../assets/item2.jpeg'
import item3 from '../assets/item3.avif'
import item4 from '../assets/item4.webp'

const Bottom = () => {
  return (
    <div className='flex w-full h-28'>
      <img src={item1} alt="Loading" className='w-96 h-80 px-5 pt-4 hover:shadow-md' />
      <img src={item2} alt="Loading" className='w-96 h-80 px-5 pt-4 hover:shadow-md' />
      <img src={item3} alt="Loading" className='w-96 h-80 px-5 pt-4 hover:shadow-md' />
      <img src={item4} alt="Loading" className='w-96 h-80 px-5 pt-4 hover:shadow-md' />
    </div>
  )
}

export default Bottom