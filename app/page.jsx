'use client'
import { useAppContext } from '@/context/appContext'
import Link from 'next/link'
import { useState } from 'react'

export default function Hero() {
  const { user } = useAppContext() || {};
  return (
    <div className="relative -mt-22 min-h-screen flex flex-col items-center justify-center text-center bg-background overflow-hidden">

      {/* Backdrop Image */}
      <img
        src="./backdrop.avif"
        alt="Backdrop"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-2 text-shadow-md">
          SHE CAN FOUNDATION
        </h1>
        <h3 className="text-xl md:text-2xl font-semibold text-primary-text mb-6">
          Together We Can Change The World
        </h3>

        <p className="text-lg text-gray-700 mb-8">
          Join Us Today
        </p>

        {
          user ?

            <Link
              href="/dashboard"
              className="bg-accent text-white px-6 py-3 shadow-md rounded-full font-semibold hover:bg-[#e14d24] transition"
            >
              Go To Dashboar
            </Link>
            :
            <Link
              href="/login"
              className="bg-accent text-white px-6 py-3 shadow-md rounded-full font-semibold hover:bg-[#e14d24] transition"
            >
              Login / Register
            </Link>

        }

      </div>
    </div>
  )
}
