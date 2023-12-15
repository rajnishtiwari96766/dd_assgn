import React from 'react'

const Header = () => {
  return (
    <div className='bg-blue-500 h-14 flex space-x-96 px-40 py-3'>
        <div className='flex space-x-4'>
          <img src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png" alt="" className='h-12 w-28 pb-2
          ' />
        <input
        type='text' placeholder='Search for products, brands and more'
        className='border-2 bg-blue-500 placeholder:text-white p-2 pt-2 text-sm h-8 w-96 rounded-md'/>
        </div>

        <div className='flex space-x-8 pl-80'>
        <i class="fa-solid fa-moon py-1"></i>
        <div className='flex space-x-2'>
        <i class="fa-solid fa-cart-shopping py-1"></i>
        <p>Cart</p>
        </div>
       </div>
    </div>
  )
}

export default Header