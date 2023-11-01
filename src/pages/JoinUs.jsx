import React from 'react'
import handshake from '../assets/handhsake.png';
import computer from '../assets/computer2.png';
import Footer from './Footer';

const JoinUs = () => {
  return (
   <>
   <div className="page-info">
          <div className="row">
              <h1 className='text-5xl'>Join Us</h1>  
              <hr />
          </div>
      </div>
   <div className='min-h-screen flex flex-col items-center justify-center bg-gray-300 '>
    <div className='mb-20 flex flex-col items-center justify-center'>
   
    <div className='flex flex-col md:flex-row lg:flex-row gap-8'>
  <div className='car-type max-w-md w-full bg-white p-5 md:p-8 lg:p-8 shadow-lg rounded-md justify-center items-center'>
    <img src={handshake} alt='' className='h-24 md:h-32 lg:h-40 ml-0 md:ml-24 lg:ml-24' />
    <p className='font-normal py-3 md:py-5 lg:py-5'>
      If you are a travel agent or you just want to book a cab for someone you know, this is the simplest way to do it.
    </p>
    <a href='/agentreg'>
      <button className='w-full py-3 md:py-5 lg:py-5 bg-black text-white font-semibold rounded-3xl hover:bg-[#fec901] hover:text-black'>
        As Agent
      </button>
    </a>
  </div>

  <div className='car-type max-w-md w-full bg-white p-5 md:p-8 lg:p-8 rounded shadow-lg justify-center items-center'>
    <img src={computer} alt='computer' className='h-20 md:h-28 lg:h-36 ml-0 md:ml-24 lg:ml-24 pl-2 md:pl-5 lg:pl-5' />
    <p className='font-normal py-3 md:py-5 lg:py-5 lg:mt-2'>
      If you have a website, blog, web page, or mobile app with good traffic, this is the simplest way to do it.
    </p>
    <a href='/affiliatereg'>
      <button className='w-full py-3 mt-2 md:py-5 lg:py-5 bg-black text-white font-semibold rounded-3xl hover:bg-[#fec901] hover:text-black'>
        As Affiliate
      </button>
    </a>
  </div>
</div>

    </div>
   </div>
   <Footer />   
   </>
  )
}

export default JoinUs
