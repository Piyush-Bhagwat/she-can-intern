
import { useAppContext } from '@/context/appContext'
import Image from 'next/image'
import React from 'react'
import { FaCrow, FaCrown, FaGift, FaHeart } from 'react-icons/fa6'

const Dashboard = () => {
    const {user} = useAppContext();

    return (
        <div className="min-h-[70vh] bg-background flex flex-col items-center p-2 md:p-6">
     
            <div className="bg-white shadow-lg rounded-2xl p-2 md:p-6 w-full  max-w-sm border border-accent/20">
                <div className="flex items-center gap-5">
                    <img
                        src= {user?.photoURL}
                        alt="User"
                        width={100}
                        height={100}

                        className="rounded-full border-4 border-accent/40"
                    />
                    <div className='flex flex-col justify-start'> 
                        <h2 className="mt-3 text-xl font-bold text-primary-text">User Name</h2>
                        <p className="text-sm text-gray-500">useremail@gmail.com</p>
                        <h1 className="mt-4 text-3xl font-bold text-accent">₹ 2630</h1>
                    </div>
                </div>
            </div>

            
            <div className="mt-4 md:mt-8 grid grid-cols-2 gap-6 w-full max-w-lg">
                <div className="bg-white p-4 rounded-xl shadow-md border border-accent/20 flex flex-col items-center">
                    <FaGift className="text-accent text-3xl mb-2" />
                    <h3 className="font-semibold text-primary-text">She Can</h3>
                    <p className="text-sm text-gray-500">2000+ Donations</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md border border-accent/20 flex flex-col items-center">
                    <FaHeart className="text-accent text-3xl mb-2" />
                    <h3 className="font-semibold text-primary-text">Top Supporter</h3>
                    <p className="text-sm text-gray-500">Unlocked Badge</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
