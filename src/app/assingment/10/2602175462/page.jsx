import React from 'react'
import { db } from './firebase/Init'

export default function page() {
  console.log(`db: `,db)
  return (
    <div>page</div>
  )
}
