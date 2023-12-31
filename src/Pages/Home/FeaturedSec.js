import React from 'react'
import { images } from '../../data/home/FeaturedIn_data'
const FeaturedSec = () => {
  return (
    <div className='m-16 py-6'>
        <h1 className='text-center text-2xl md:text-4xl font-extrabold'>Fetured in</h1>
        <div className='flex items-center py-9'>
    {images.map((image,index)=>{
      return (
      <div className='w-1/5 p-2' key={index}>
        <img className='w-48' src={image} alt='featured_img' />
        </div>)
    })}
    </div>
    </div>
  )
}

export default FeaturedSec