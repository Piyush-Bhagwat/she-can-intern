'use client'
import { useAppContext } from '@/context/appContext'
import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Login'
import React from 'react'

const DashboardPage = () => {
  const { user } = useAppContext() || {};
  return (
    <div>

      {user ?
        <Dashboard /> : <Login />}
    </div>
  )
}

export default DashboardPage