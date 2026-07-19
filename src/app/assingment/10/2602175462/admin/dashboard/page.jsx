"use client";
import React from 'react'
import ProtectedAdminRoute from '../../firebase/ProtectedAdminRoute'

export default function page() {
  return (
    <ProtectedAdminRoute>
        <div>
            <p>accessible only to users with the admin role</p>
        </div>
    </ProtectedAdminRoute>
  )
}