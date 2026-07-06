'use client'
import { useRouter } from 'next/navigation';
import React, {useState, useEffect, useRef, useMemo} from 'react';

export default function MyPage(){
    const myStateRightNow = ['chill', 'sleep', 'code', 'reading', 'learning', 'playing with my friends', 'go outside to enjoy world'];
    const inputRef = useRef(null);
    const [state, setState] = useState('chill');
    const [count, setCount] = useState(0);
    const router = useRouter();
    const nim = 2602175462;
    
    const randomized = ()=>{
        const randomIndex = Math.floor(Math.random() * myStateRightNow.length);
        setState(myStateRightNow[randomIndex]);
    }

    function handleInputClick(){
        inputRef.current.focus();
    }

    const slowFunc = (num)=>{
        for(let i = 0;i<990000000;i++){}
        return num*2;
    }

    const doubleNumUseMemo = useMemo(()=>{
        return slowFunc(count);
    }, [count])

    function goToDetails(){
        router.push('2602175462/details');
    }


    return(
        <div className='flex flex-col justify-center items-center min-h-screen min-w-screen'>
            <h1>Timotius - 2602175462</h1>
            <p>Student of Computer Science</p>
            <h2>useRef</h2>
            <input type="text" ref={inputRef} placeholder='Type something' />
            <button onClick={handleInputClick}>Focus input</button>
            <h2>useState without useMemo</h2>
            {/* <button onClick={()=> setState(randomized)}>Generate State</button> */}
            <button onClick={randomized}>Generate State</button>
            <p>My state right now : <strong>{state}</strong></p>
            <h2>useMemo</h2>
            <button onClick={()=> setCount(count + 1)}>useMemo (if you click this usememo effect will be little bit lag and that's okay)</button>
            <p>Usememo Effect: {doubleNumUseMemo}</p>
            {/* <Link href='/details'>Go to details</Link> */}
            <button onClick={() =>goToDetails()}>Go to details</button>
        </div>
    )
}