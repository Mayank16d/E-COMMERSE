'use client'
import React from 'react'
import Link from 'next/link'
// import To from 'next/link'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';


function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
    console.log('Token:', token);
  }, [isLoggedIn]);

  return (
    <>
    <nav>
      
      <div className='flex bg-indigo-800 p-2 justify-between items-center'>
        <div className='text-white text-2xl'>Logo</div>
          <ul className='flex gap-4 text-white'>
            <li className='hover:text-gray-400 '><Link href="/">Home</Link></li>
            <li className='hover:text-gray-400 '><Link href="/About">About</Link></li>
            <li className='hover:text-gray-400 '><Link href="/Product">Product</Link></li>
            <li className='hover:text-gray-400 '><Link href="/Contact">Contact</Link></li>
            <li className='hover:text-gray-400 '><Link href="/Cart">Cart</Link></li>
          </ul>
          {!isLoggedIn? (
            <Link href="/login" className='bg-green-600 rounded-md text-l p-4 hover:bg-red-600 hover:text-white'>Login/Signup</Link>
          ): (
            <Link href="/profile" className='bg-green-600 rounded-md text-l p-4 hover:bg-red-600 hover:text-white'>Profile</Link>
          )}
      </div>
      
    </nav>
    </>
  )
}

export default NavBar