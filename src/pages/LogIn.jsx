import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import Auth from './Auth';

function LogIn() {
  
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  })

  const { email, password } = dataForm;

  function onChange(e){
    setDataForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className='w-full mt-20'>
      <div className='bg-[#050533] w-[80vh] h-[60vh] mx-auto rounded'>
        <div className=''>
          <h2 className='text-xl text-center mb-3 pt-4 text-white'>Login</h2>
          
          <form className='flex flex-col pl-8 space-y-5 pt-3'> 
           
            <input type='email' id='email' value={email} placeholder='Email' className='w-[90%] p-2 rounded outline-none' onChange={onChange}/>
           
            <div className='relative'>
            <input type={showPassword ? "text" : "password"} id='password' value={password} placeholder='Password' className='w-[90%] p-2 rounded outline-none' onChange={onChange}/>
              { showPassword ? (
                <AiFillEyeInvisible className='absolute right-14 top-3 cursor-pointer text-xl' onClick={()=> setShowPassword((prevState) => !prevState)}/>
              ) : (
                <AiFillEye className='absolute right-14 top-3 cursor-pointer text-xl'onClick={()=> setShowPassword((prevState) => !prevState)}/>
              )}
            </div>
           
            <button className='w-[90%] bg-[#E34234] rounded p-2 text-[18px] text-white cursor-pointer'>Login</button>
            <Auth/>
          </form>
          
           <div className='flex space-x-5 pt-2'>
          <h3 className='text-white pl-8 pt-3'>Don't have an account? 
          <span className='text-[#E34234] cursor-pointer' onClick={() => navigate('/signup')}>Signup</span>
          </h3>

          <h2 className='text-white pl-8 pt-3'>
          <span className='text-[#145DA0] cursor-pointer' onClick={() => navigate('/forgotpassword')}>Forgot password?</span>
          </h2>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default LogIn