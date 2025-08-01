'use client'
import Link from 'next/link'
import { FaBars } from "react-icons/fa6"
import { useState } from 'react'
import { useAppContext } from '@/context/appContext'
import { loginWithGoogle } from '@/DB/firebase.auth'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { user, setUser } = useAppContext() || {}
    const router = useRouter();

    async function handleLogin() {
        await loginWithGoogle();
        router.push("/dashboard");
        window.location.reload();
    }


    function handleLogout() {
        setUser?.(null);
        if(typeof window !== 'undefined')
        localStorage.removeItem('user');
    }

    return (
        <div className='w-full py-2 sticky top-0 z-50'>
            <nav className="bg-white shadow-md rounded-full px-6 py-3 flex items-center max-w-4xl mx-auto mt-4 border border-accent/20 justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=296,fit=crop,q=95/Aq2NJ23MzBH2rx2j/she-YlenJon1O7ieeEoa.jpg" alt="logo" className='rounded-full' width={35} height={35} />
                    <span className="text-lg font-bold text-accent">SheCan</span>
                </Link>

                {user ?
                    < div className="hidden md:flex gap-6 text-primary-text font-medium">
                        <Link href="/dashboard" className="hover:text-accent transition">Dashboard</Link>
                        <Link href="/leaderboard" className="hover:text-accent transition">Leaderboard</Link>
                        <button onClick={handleLogout} className="hover:text-accent transition">Logout</button>
                    </div>
                    : <button onClick={handleLogin} className="hover:text-accent transition">Login</button>}


                <button
                    className="md:hidden text-accent text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaBars />
                </button>
            </nav >

            {/* Mobile Dropdown */}
            {
                isOpen && user && (
                    <div className="md:hidden fixed top-15 right-0 bg-white rounded-2xl shadow-md border border-accent/20 mt-2 mx-4 p-3 text-center space-y-3 ">
                        <Link href="/dashboard" className="block text-primary-text hover:text-accent transition">Dashboard</Link>
                        <Link href="/leaderboard" className="block text-primary-text hover:text-accent transition">Leaderboard</Link>
                        <button onClick={handleLogout} className="hover:text-accent transition">Logout</button>
                    </div>
                )
            }
        </div >
    )
}

export default Navbar
