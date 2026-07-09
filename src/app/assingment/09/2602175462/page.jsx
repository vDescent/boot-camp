"use client"


import React from 'react'
import { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase/Initialize'

export default function page() {
  useEffect(()=>{
    const testFire = async ()=>{
      try{
        const snapshot = await getDocs(collection(db, "test"));

        console.log(`Firestore tidak error, Jumlah dokumen:${snapshot.size}`);
      } catch (error){
        console.log(`Error`, error);
      }
    };
    testFire();
  }, []);


  return (
    <div className='bg-amber-500 w-full h-full'>page</div>
  )
}
