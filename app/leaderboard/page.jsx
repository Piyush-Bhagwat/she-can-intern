'use client'
import { useAppContext } from '@/context/appContext'
import Leaderboard from '@/pages/Leaderboard'
import Login from '@/pages/Login';
import React from 'react'

const LeaderboardPage = () => {
    const {user } = useAppContext();
  return (
    user ? 
    <Leaderboard /> : <Login />
  )
}

export default LeaderboardPage