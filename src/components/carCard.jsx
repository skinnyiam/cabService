import { Button } from '@material-tailwind/react'
import React from 'react'
import hatchback from '../assets/hatchback2.jpg';
import sedan from '../assets/sedan2.png';
import suv from '../assets/suv2.jpg';  
import innova from '../assets/innova.png';  
import { Link } from 'react-router-dom';


const CarCard = () => {
  return (
    <div className='car-card text-black mt-5 flex flex-col md:flex-row lg:flex-row justify-center items-center mx-2 md:mx-5 lg:mx-5'>
  <div className='car-type bg-white rounded-md mb-5 relative z-5 shadow-md border-none mx-2 md:mx-3 lg:mx-3 md:w-1/2 lg:w-1/4 px-2 py-5'>
    <img src={hatchback} className='mx-auto h-24 md:h-32 lg:h-40'></img>
    <h3 className="text-dark-gray text-2xl font-bold mb-3 mt-4 text-center md:text-left flex flex-col justify-center items-center  ">
      ₹5999
      <span className='text-black'>Hatchback(AC)</span>
      <span className='text-black font-light text-sm'>(Swift , WagonR or Similar)</span>
    </h3>
    <div className="border-t border-gray-500 my-4"></div>

    <div className='flex flex-col justify-center items-center'>
      <p className='flex flex-row gap-5 my-2'>
        IncludedKm
        <span className=' font-semibold'>506km</span>
      </p>
      <p className='flex flex-row gap-5 my-2'>
        Extra Fare/km
        <span className=' font-semibold'>₹ 11/km</span>
      </p>
      <p className='flex flex-row gap-5 my-2'>
        Night Charges
        <span className=' font-semibold'>Included</span>
      </p>
      <p className='flex flex-row gap-10 my-2'>
            Parking Charges
            <span className=' font-semibold'>Included</span>

          </p>
      <Link to="/details" className='mx-3 md:mx-7 lg:mx-7'>
        <button className='hero-btn3 bg-black text-white font-semibold py-2  rounded-3xl hover:bg-[#fec901] hover:text-black'>Book Ride</button>
      </Link>
    </div>
  </div>

 

  <div className='car-type bg-white rounded-md mb-5 relative z-5 shadow-md border-none mx-2 md:mx-3 lg:mx-3 md:w-1/2 lg:w-1/4 px-2 py-5'>
        <img src={sedan} className='mx-auto h-24 md:h-32 lg:h-40v'></img>
        <h3 className="text-dark-gray text-[27px] font-bold mb-[18px] mt-6 text-center md:text-start flex flex-col justify-center items-center  ">
        ₹6999
        <span className='text-black'>Sedan(AC)</span>
        <span className='text-black font-light text-sm'>(Dzire , Verna or Similar)</span>
          </h3>
          <div className="border-t border-gray-500 my-4"></div>
          <div className='flex flex-col justify-center items-center'> 
          <p className='flex flex-row gap-10 my-2'>
            IncludedKm 
            <span className=' font-semibold'>520 km</span>

          </p>
          <p className='flex flex-row gap-10 my-2 '>
            Extra Fare/km
            <span className='  font-semibold'>₹ 11/km</span>

          </p>
          <p className='flex flex-row gap-10 my-2'>
            Night Charges
            <span className='  font-semibold'>Included</span>

          </p> 
          <p className='flex flex-row gap-10 my-2'>
            Parking Charges
            <span className=' font-semibold'>Included</span>

          </p>      
          <Link to="/details" className='mx-7'>

          <button className='hero-btn3  bg-black text-white font-semibold py-2  rounded-3xl hover:bg-[#fec901] hover:text-black ' >Book Ride</button>

           </Link>

                  
        


          </div>

      </div>

      
          
     
      
      <div className='car-type bg-white rounded-md mb-5 relative z-5 shadow-md border-none mx-2 md:mx-3 lg:mx-3 md:w-1/2 lg:w-1/4 px-2 py-5'>
        <img src={suv} className='mx-auto h-24 md:h-32 lg:h-35'></img>
        <h3 className="text-dark-gray text-[27px] font-bold mb-[18px] mt-6 text-center md:text-start flex flex-col justify-center items-center  ">
        ₹8999
        <span className='text-black'>SUV(AC)</span>
        <span className='text-black font-light text-sm'>(Ertiga , Marazzo or Similar)</span>
          </h3>
          <div className="border-t border-gray-500 my-4"></div>
          <div className='flex flex-col justify-center items-center'> 
          <p className='flex flex-row gap-10 my-2 '>
            IncludedKm 
            <span className=' font-semibold'>520 km</span>

          </p>
          <p className='flex flex-row gap-10 my-2 '>
            Extra Fare/km
            <span className=' font-semibold'>₹ 11/km</span>

          </p>
          <p className='flex flex-row gap-10 my-2'>
            Night Charges
            <span className=' font-semibold'>Included</span>

          </p>
          <p className='flex flex-row gap-10 my-2'>
            Parking Charges
            <span className=' font-semibold'>Included</span>

          </p>

          <Link to="/details" className='mx-7'>

           <button className='hero-btn3  bg-black text-white font-semibold py-2  rounded-3xl hover:bg-[#fec901] hover:text-black ' >Book Ride</button>

           </Link>
        


          </div>

      </div>
      <div className='car-type bg-white rounded-md mb-5 relative z-5 shadow-md border-none mx-2 md:mx-3 lg:mx-3 md:w-1/2 lg:w-1/4 px-2 py-5'>
        <img src={innova} className='mx-auto h-24 md:h-32 lg:h-35'></img>
        <h3 className="text-dark-gray text-[27px] font-bold mb-[18px] mt-6 text-center md:text-start flex flex-col justify-center items-center  ">
        ₹9999
        <span className='text-black'>Innova(AC)</span>
        <span className='text-black font-light text-sm'>(Innova)</span>
          </h3>
          <div className="border-t border-gray-500 my-4"></div>
          <div className='flex flex-col justify-center items-center'> 
          <p className='flex flex-row gap-10 my-2 '>
            IncludedKm 
            <span className=' font-semibold'>520 km</span>

          </p>
          <p className='flex flex-row gap-10 my-2 '>
            Extra Fare/km
            <span className=' font-semibold'>₹ 11/km</span>

          </p>
          <p className='flex flex-row gap-10 my-2'>
            Night Charges
            <span className=' font-semibold'>Included</span>

          </p>
          <p className='flex flex-row gap-10 my-2'>
            Parking Charges
            <span className=' font-semibold'>Included</span>

          </p>

          <Link to="/details" className='mx-7'>

          <button className='hero-btn3  bg-black text-white font-semibold py-2  rounded-3xl hover:bg-[#fec901] hover:text-black ' >Book Ride</button>
        
          </Link>

          </div>

      </div>

    </div>
  )
}

export default CarCard
