'use client'
import { useAppContext } from '@/context/appContext';
import { loginWithGoogle } from '@/DB/firebase.auth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
    const [loginToggle, setLoginToggle] = useState(false);
    const router = useRouter();
    const { user } = useAppContext();

    async function handleLogin() {
        await loginWithGoogle();
        window.location.reload();
    }

    useEffect(() => {
        if (user) {
            router.push("/dashboard");
        }
    }, [user])


    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="text-center max-w-md w-full bg-white rounded-2xl shadow-lg p-8">

                {/* Header Section */}
                <div className="mb-8 flex flex-col gap-2">
                    <h1 className="text-3xl font-extrabold text-primary-text  mb-3">
                        Welcome to <span className="text-accent">She Can Foundation</span>
                    </h1>
                    <h3 className="text-lg font-semibold text-primary-text mb-2">
                        TOGETHER WE CAN CHANGE THE WORLD
                    </h3>
                    <p className="text-sm text-primary-text  leading-relaxed">
                        We don't ask for much, just help us with what you can —
                        be it <span className="text-accent font-medium">Money</span>,
                        <span className="text-accent font-medium"> Skill</span> or
                        <span className="text-accent font-medium"> Your Time</span>.
                    </p>
                </div>

                {/* Login Button */}
                <div >
                    <button
                        onClick={handleLogin}
                        className="flex items-center justify-center gap-3 w-full py-3 px-6 
                       bg-accent text-white font-semibold 
                       rounded-xl shadow-md 
                       hover:scale-105 hover:bg-orange-500 
                       transition-transform duration-200"
                    >
                        <FaGoogle className="text-lg" />
                        Sign in with Google
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;
