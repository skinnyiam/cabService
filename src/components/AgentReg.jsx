import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Agent(  ) {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
    number: '',
  });

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    

    navigate('/partnerportal', { state: { formData } });

   
  };
  const [isChecked , setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 mt-4 py-4">
        <h1>Agent <span> Registation</span></h1>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full py-10">
        <h2 className="text-2xl font-bold mb-10">
          {isRegister ? 'Register' : 'Login'}
        </h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <><div className="mb-10">
                          <label htmlFor="username" className="block text-sm font-medium text-gray-600  my-1">
                              Phone Number
                          </label>
                          <input className="w-full px-3 py-2 border rounded-md text-gray-700"
                              type="tel"
                              placeholder='Enter 10 digit number'
                              id="number"
                              name="number"
                              value={formData.number}
                              onChange={handleChange} required
                               />
                      </div>
                      <div className="mb-10">
                              <label htmlFor="username" className="block text-sm font-medium text-gray-600 my-1">
                                  Username
                              </label>
                              <input
                                  type="text"
                                  placeholder='Enter Name'
                                  id="username"
                                  name="username"
                                  value={formData.username}
                                  onChange={handleChange}
                                  className="w-full px-3 py-2 border rounded-md text-gray-700" required />
                          </div>
                      <div className="mb-10">
                              <label htmlFor="address" className="block text-sm font-medium text-gray-600 my-1">
                                  Address
                              </label>
                              <input
                                  type="text"
                                  placeholder='Enter Address'
                                  id="address"
                                  name="address"
                                  value={formData.address}
                                  onChange={handleChange}
                                  className="w-full px-3 py-2 border rounded-md text-gray-700" required />
                          </div>
                          <div className="mb-10">
                              <label htmlFor="address" className="block text-sm font-medium text-gray-600 my-1">
                                  Bank Account Number
                              </label>
                              <input
                                  type="number"
                                  placeholder='Enter Account Number'
                                  id="account_number"
                                  name="account_number"
                                  value={formData.account_number}
                                  onChange={handleChange}
                                  className="w-full px-3 py-2 border rounded-md text-gray-700" required />
                          </div>
                          <div className="mb-10">
                              <label htmlFor="address" className="block text-sm font-medium text-gray-600 my-1">
                                  IFSC Code
                              </label>
                              <input
                                  type="text"
                                  placeholder='Enter IFSC Code'
                                  id="ifsc"
                                  name="ifsc"
                                  value={formData.ifsc}
                                  onChange={handleChange}
                                  className="w-full px-3 py-2 border rounded-md text-gray-700" required />
                          </div>
                          </>
          )}
          <div className="mb-10">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 my-1 ">
              Email
            </label>
            <input
              type="email"
              placeholder='Email'
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md text-gray-700" required
            />
          </div>
          <div className="mb-10">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 my-1  ">
              Password
            </label>
            <input
              type="password"
              placeholder='password'
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md text-gray-700" required
            />
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
          
           <button type="submit" className="w-full py-5 bg-black text-white font-semibold  rounded-xl hover:bg-[#fec901] hover:text-black">
            {isRegister ? 'Register' : 'Login'}
          </button> 
        </form>
        <p className="mt-10 text-center">
          {isRegister ? 'Already have an account?' : 'Don’t have an account?'}
          <button onClick={toggleForm} className="text-blue-500 ml-2">
            {isRegister ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Agent;
