import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Auth from './Auth';

function ForgotPssword() {
  
  const navigate = useNavigate();

  
  const [email, setEmail] = useState("")

  function onChange(e){
   setEmail(e.target.value);
  }

  return (
    <div className='w-full mt-20'>
      <div className='bg-[#050533] w-[80vh] h-[58vh] mx-auto rounded'>
        <div className=''>
          <h2 className='text-xl text-center mb-3 pt-4 text-white'>Forgot Password</h2>
          
          <form className='flex flex-col pl-8 space-y-5 pt-3'> 
           
            <input type='email' id='email' value={email} placeholder='Email' className='w-[90%] p-2 rounded outline-none' onChange={onChange}/>
           
            <button className='w-[90%] bg-[#E34234] rounded p-2 text-[18px] text-white cursor-pointer'>Send reset password</button>
            <Auth/>
          </form>

          <h3 className='text-white pl-8 pt-3'>Don't have an account? 
          <span className='text-[#E34234] cursor-pointer' onClick={() => navigate('/signup')}>Signup</span>
          </h3>
       
        </div>
      </div>
    </div>
  )
}

export default ForgotPssword