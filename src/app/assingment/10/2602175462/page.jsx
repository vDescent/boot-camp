"use client"

import React from 'react'
import { db } from './firebase/Init'
import { auth } from './firebase/Init'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter();

  const handleLogout = async()=>{
    try{
      const logOutUser = await signOut(auth);
      console.log(`Sign out Success`);

      router.replace(`/assingment/10/2602175462/login`);
    } catch (error){
      console.log(`Error ${error}`);
    }
  }

  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
