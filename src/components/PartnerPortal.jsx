import React from 'react'
import { useLocation } from 'react-router-dom';
import { FaHome, FaKey, FaRupeeSign, FaDoorOpen } from 'react-icons/fa';

const PartnerPortal = () => {

    const location = useLocation();
  const formData = location.state?.formData || {};
  return (
   <div className="bg-gray-100 h-screen">
      <header className="bg-[#f8f4d9] py-4 flex flex-row">
        <div className="container mx-auto text-center justify-center">
          <h1 className="text-2xl text-black my-6">IntrCitiCabs <span className='text-[#fed801]'>Partner Portal</span></h1>
        </div>
        <div className='navPort flex flex-row gap-6 py-6 mx-[90px]'>
            <a href='/partnerportal' ><FaHome /></a>
            <a href='/wallet'><FaRupeeSign /></a> 
            <a href=''><FaKey /></a>
            <a href=''><FaDoorOpen /></a>
        </div>
      </header>

      <div className="container mx-auto mt-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <aside className="col-span-1 bg-white p-4">
           
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Partner Profile</h2>
        
            </div>
            <div className='block mb-2' >
                <ul className='relative'>
               <li><h5  className='gap-2 font-semibold'>Name:<span className='font-normal ml-2 '>{formData.username}</span> </h5> </li>
               <li><h5 className='gap-2 font-semibold'>Phone: <span className='font-normal ml-2'>{formData.number}</span></h5></li>
               <li><h5 className='gap-2 font-semibold'>Email: <span className='font-normal ml-2'>{formData.email}</span></h5></li>
               <li><h5 className='gap-2 font-semibold'>Address: <span className='font-normal ml-2'>{formData.address}</span></h5></li>
                </ul>

                <div className="border-t border-gray-500 my-4"></div>

                <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Bank Account Details</h2>
        
            </div>
            
                <ul className='relative'>
               <li><h5  className='gap-2 font-semibold'>Name:<span className='font-normal ml-2 '>{formData.username}</span> </h5> </li>
               <li><h5 className='gap-2 font-semibold'>Account Number: <span className='font-normal ml-2'>{formData.account_number}</span></h5></li>
               <li><h5 className='gap-2 font-semibold'>IFSC Code: <span className='font-normal ml-2'>{formData.ifsc}</span></h5></li>
            
                </ul>

            
                </div>
                
            

            
          
          </aside>

         
          <main className="col-span-2 bg-white p-4 sm:mb-2">
           
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <ul>
            <li className='mb-6'><h5  className='gap-2 font-semibold'>Wallet Balance:<span className='font-normal  px-10 '>Rs.7800</span> </h5> </li>
            <li className='mb-5 '><h5  className='gap-2 font-semibold'>Eligible Balance:<span className='font-normal  px-9'>Rs.8400(includes bookings already completed)</span> </h5> </li>
            <li className='mb-5'><h5  className='gap-2 font-semibold'>Recent Booking:<span className='font-normal font-serif  px-9'>Delhi Airport to Faridabad</span> </h5> </li>
            <li className='mb-5'><h5  className='gap-2 font-semibold'>Commission Percent:<span className='font-normal font-serif  px-9'>Three Percent</span> </h5> </li>
              
            </ul>
          
          </main> 
        </div>
      </div>
    </div>
  


  )
}

export default PartnerPortal
