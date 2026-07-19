import React from 'react'
import ProtectedRoute from './firebase/ProtectedRoute'

export default function page() {
  return (
    <ProtectedRoute>
      <div>
          <h1>Assignment 11</h1>
      </div>
    </ProtectedRoute>
  )
}
