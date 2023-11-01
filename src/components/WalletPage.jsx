import React from 'react';
import { FaHome, FaKey, FaRupeeSign, FaDoorOpen } from 'react-icons/fa';

const WalletPage = () => {
  return (
    <div className="bg-gray-100 h-screen container mx-auto p-8">
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
      <div className="grid grid-cols-2 gap-8 py-3">
        {/* Wallet Column */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">My Wallet</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg">Balance:</span>
            <span className="text-xl font-semibold text-green-600">$1,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg">Account Number:</span>
            <span className="text-sm">1234567890</span>
          </div>
        </div>

        {/* Transactions Column */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {/* Transaction Item */}
            <div className="flex justify-between">
              <span className="text-lg">Payment to John Doe</span>
              <span className="text-lg font-semibold text-red-600">-$50</span>
            </div>
            {/* Add more transaction items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
