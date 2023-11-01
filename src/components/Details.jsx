import React , {useState} from 'react';
import { Footer } from '../pages';

function App() {

  const [isTicked, setIsTicked] = useState(false);
  const handleIsTickedChange = () => {
    setIsTicked(!isTicked);
  };

  const [checked , setChecked] = useState(false);

  const manageCheckboxChange = () => {
    setChecked(!checked);
  };

  const [isChecked , setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <><div className="min-h-screen flex items-center justify-center bg-gray-300">
      
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-lg my-7">
      <h2 className="text-2xl font-semibold mb-4 mx-16">Contact Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="name">
              Enter phone number
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md text-gray-700"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md text-gray-700"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md text-gray-700"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">
              Pick-up Address
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md text-gray-700"
              type="text"
              id="address"
              name="address"
              placeholder="Complete Pickup Address"
              required />
          </div>
          <div className='addCharge mb-2'>
            <h5>Additional Services(Optional)</h5>
            <label className='flex items-center space-x-2 py-3'>
              <input
              type='checkbox'
              className='h-4 w-4 text-[#fec901]'
              checked={checked}
              onChange={manageCheckboxChange} />
              <span className='text-gray-700'>Assured carrier for luggage space for Rs.450</span>
            </label>
            <label className='flex items-center space-x-2 py-3'>
              <input
              type='checkbox'
              className='h-5 w-5 text-[#fec901]'
              checked={isTicked}
              onChange={handleIsTickedChange} />
              <span className='text-gray-700'>Pay Rs.300 and get assured Sedan for your journey</span>
            </label>
          </div>
          <div className='tnc mx-auto mt-4 mb-4'>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={isChecked}
                onChange={handleCheckboxChange}  required />
              <span className="text-gray-700">I agree to the <a className='font-semibold cursor-pointer'>Terms</a>  and <a className='font-semibold cursor-pointer'>Conditions</a> of this service</span>
            </label>
          </div>

        <a href='/stripe'> <button
            className=" w-full py-5 bg-black text-white font-semibold  rounded-3xl hover:bg-[#fec901] hover:text-black"
            type="submit"
          >
            Pay Now
          </button></a>
        </form>
      </div>

    </div><Footer /></>
  );
}

export default App;
