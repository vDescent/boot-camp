'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter();

    function goToRegister(){
        router.push(`/assingment/10/2602175462/register`)
    }


  return (
    <div style={{display:'flex'}}>
        <h1>Login page</h1>
        <button onClick={goToRegister}>Go to Register page</button>
    </div>
  )
}
