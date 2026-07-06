import React from 'react'

export default async function DetailsPage() {
    const response = await fetch("https://catfact.ninja/fact");
    // console.log(response);

    // error handling
    if(!response.ok){
        throw new Error("Failed to fetch");
    }

    const data = await response.json();

    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:"center", alignItems:'center', padding:'2rem'}}>
            <h2 style={{margin:'1rem', backgroundColor:'orange', padding:'16px', border:'solid 2px orange', borderRadius:'16px' }}>Random Fact For The Day: </h2>
            <p style={{margin:'0', textAlign:'center'}}>{data.fact}</p>
        </div>
    )
}
