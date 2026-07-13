'use client';
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import Link from 'next/link';

export default function RegisterPage() {
    const router = useRouter();

    function goToLogin(){
        router.push(`/assingment/10/2602175462/login`)
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <h1>Register Page</h1>
                <h3 style={{margin:'0'}}>Name</h3>
                <input type="text" name='name' className={styles.input} />
                <h3 style={{margin:'0'}}>Email</h3>
                <input type="text" name='email' className={styles.input}/>
                <h3 style={{margin:'0'}}>Password</h3>
                <input type="text" name='password' className={styles.input}/>
                <h3 style={{margin:'0'}}>Confirm Password</h3>
                <input type="text" name='confirmPassword' style={{marginBottom:'1rem'}} className={styles.input}/> <br />
                <button className={styles.button}>Login</button>
                <p>Already have account ? <Link href='/assingment/10/2602175462/login'>Go to Login Page</Link></p>
            </div>
            {/* <button onClick={goToLogin}>Go to login</button> */}
        </div>
    )
}
