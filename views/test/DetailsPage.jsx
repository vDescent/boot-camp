'use client'
import React, { useEffect, useState } from 'react'

export default function DetailsPage() {
    // const response = await fetch("https://catfact.ninja/fact");
    // // console.log(response);

    // // error handling
    // if(!response.ok){
    //     throw new Error("Failed to fetch");
    // }

    // const data = await response.json();

    const [fact,setFact] = useState('');

    useEffect(()=>{
        async function fetchFact() {
            const response = await fetch('https://catfact.ninja/fact');
            const data = await response.json();
            setFact(data.fact);
        }
        fetchFact();
    }, []);



    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:"center", alignItems:'center', padding:'2rem'}}>
            <h2 style={{margin:'1rem', backgroundColor:'orange', padding:'16px', border:'solid 2px orange', borderRadius:'16px' }}>Random Fact For The Day: </h2>
            <p style={{margin:'0', textAlign:'center', fontSize:'16px'}}>{fact}</p>
        </div>
    )
}
