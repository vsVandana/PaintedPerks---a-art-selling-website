import React from 'react'

const ProductCategory = ({Items_data, type}) => {
  return (
    <div>
        <div className='m-16 py-10'>
        <div className='flex items-center justify-between '>
            <h1 className='md:text-3xl text-xl font-extrabold'>Shop By {type}</h1>
            <button className='border-2 border-[#285380] rounded-3xl bg-[#285380] px-4 sm:px-10 py-2 text-md sm:text-xl text-white tracking-wider font-semibold hover:border-[#E7A0AE] hover:bg-[#E7A0AE]'>View More</button>
        </div>
        <div className='my-12 flex justify-between flex-wrap sm:flex-nowrap'>
            {Items_data.map((items)=>{
               return( <div className='card w-full sm:w-1/2 md:w-1/4 border-2 border-[#E7A0AE] hover:border-[#285380] p-4 m-1' key={items.id}>
                    {(items.img1 && items.img2) ?(
                <div className='flex'>
                 <img  className='w-1/2 p-1' src={items.img1} alt='category_item'/>
                 <img className='w-1/2 p-1' src={items.img2} alt='category_item'/>
                 </div>):
                 (<img  className='p-1' src={items.img1} alt='category_item'/>)}
                 <div className='flex flex-col items-center justify-between m-2 pt-4'>
                 <h2 className='xl:text-2xl lg:text-xl text-md font-extrabold'>{items.collection_type}</h2>
                 <h3 className='text-gray-500 xl:text-xl lg:text-lg font-semibold'>{items.Posters}  Posters</h3>
                 </div>
            </div>
            )
            })}
            
        </div>
    </div>
        </div>
  )
}

export default ProductCategory