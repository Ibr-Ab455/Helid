import React from 'react'
import { FcGoogle } from 'react-icons/fc'

function Auth() {
  return (
    <div>
      <button className='flex w-[90%] justify-center items-center bg-red-500 p-2 rounded text-white uppercase text-sm'>
       <FcGoogle/>
        Continue with Google
      </button>
    </div>
  )
}

export default Auth