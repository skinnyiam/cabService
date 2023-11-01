import React , {useState} from 'react'
import {FiArrowLeft , FiArrowRight} from 'react-icons/fi';
import CarCard from '../components/carCard';
import Footer from './Footer';
import { FaArrowRight } from 'react-icons/fa';
import SeamlessExp from './SeamlessExp';
import DateTimePicker from '../components/DateTimePicker';




const Cars = () => {
  
  return (
    <>
    <div className=' car mx-30 bg-white min-h-screen'>
      <div className='cabContent mx-[120px]'>
      <a href='/' className=' flex flex-row gap-2' ><button className=' flex flex-row gap-1 cursor-pointer'><FiArrowLeft className='mt-1'/> Back</button> </a>
      <div className='destination flex flex-col md:flex-row lg:flex-row justify-center items-center gap-4 md:gap-16 lg:gap-16'>
       <div className='flex flex-row gap-5 '>
        <div className='flex flex-row gap-2'>
          <h4 className='mt-8'>From:</h4>
          <p className='hero-btn5 cursor-pointer bg-black text-white font-medium hover:bg-[#fec901] hover:text-black'>Gorakhpur</p>    
        </div>
        <div className='flex flex-row gap-2'>
          <h4 className='mt-8'>To:</h4>
          <p className='hero-btn5  cursor-pointer bg-[#fec901] font-medium hover:bg-black hover:text-white'>Bareilly</p>
        </div>
       </div>
 
  <div>
    <DateTimePicker />
  </div>
</div>

      <div className="flex flex-col md:flex-row gap-20 md:gap-5 mt-5">
        <CarCard  />
       
        </div>
      </div>
    </div>
    <SeamlessExp />
    <Footer />
    </>
  )
}



export default Cars 
