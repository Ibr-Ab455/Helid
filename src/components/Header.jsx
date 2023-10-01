import React from 'react'
import { useNavigate, useLocation } from 'react-router'

function Header() {
  
    const navigate = useNavigate();
    const location = useLocation();

    const pathRoute = (e) => {
      if(e === location.pathname){
       return true
      }
    }
  
    return (
    <section className='bg-white border-b shadow-sm sticky top-0 z-10'>
        <div className='flex justify-between items-center px-3 w-[85%] mx-auto py-2'>
            {/* Logo */}
            <div>
             <h1 className='text-3xl text-[#0D698B] cursor-pointer font-sans'>HELID</h1>
            </div>
            
            {/* List */}
            <div>
                <ul className='flex space-x-10'>
                
                 <li className={`text-[18px] cursor-pointer text-[#000] ${pathRoute('/') && 'text-[#0D698B]'}`} 
                    onClick={() => navigate('/')}>Home</li>
                    
                    <li className={`text-[18px] cursor-pointer text-[#000] ${pathRoute('/offers') && 'text-[#0D698B]'}`} 
                    onClick={() => navigate('/offers')}>Offers</li>
                    
                    <li className={`text-[18px] cursor-pointer text-[#000] ${pathRoute('/about') && 'text-[#0D698B]'}`} 
                    onClick={() => navigate('/about')}>About Us</li>
                    
                    <li  className={`text-[18px] cursor-pointer text-[#000] ${pathRoute('/contact') && 'text-[#0D698B]'}`} 
                    onClick={() => navigate('/contact')}>Contact</li>
                    
                    <li  className={`text-[18px] cursor-pointer text-[#000] ${pathRoute('/login') && 'text-[#0D698B]'}`} 
                    onClick={() => navigate('/login')}>LogIn</li>

                </ul>
            </div>
        </div>
    </section>
  )
}

export default Header