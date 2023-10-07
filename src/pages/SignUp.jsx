import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

function SignUp() {

  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false)
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  const { name, email, password } = dataForm;

  function onChange(e){
    setDataForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className='w-full mt-20'>
    <div className='bg-[#050533] w-[80vh] h-[65vh] mx-auto rounded'>
      <div className=''>
        
        <h2 className='text-xl text-center mb-3 pt-4 text-white'>Login</h2>
        
        <form className='flex flex-col pl-8 space-y-5 pt-3'> 
          
        <input type='text' id='name' value={name} placeholder='Name' className='w-[90%] p-2 rounded outline-none' onChange={onChange}/>

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
        </form>

        <h3 className='text-white pl-8 pt-3'> already have an account? 
        <span className='text-[#E34234] cursor-pointer' onClick={() => navigate('/login')}>login</span>
        </h3>
     
      </div>
    </div>
  </div>
  )
}

export default SignUp