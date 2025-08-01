import Image from 'next/image'
import React from 'react'
import { FaCrow, FaCrown } from 'react-icons/fa6'

const Leaderboard = () => {
    const leaders = [
        { id: 1, name: "Piyush", donations: 7844, img: "https://imgs.search.brave.com/4i11i4BhkA1zEIkMg2tpmnNiXjbdQccnIdAnMHZD2ho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzM5LzIzLzIw/LzM2MF9GXzczOTIz/MjAzOF9SZ1Ayc2xW/ek16MVBFY0JqNlh3/T0dEcGpITzV2czZw/Ry5qcGc" },
        { id: 2, name: "Anushka", donations: 6520, img: "https://imgs.search.brave.com/n59pRqxPhzAWV9Zg-98uou2tsLebNdfEpi1nT6L8qlM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvZmlsZXBpY3R1/cmUuYWkvc3R5bGVz/L2doaWJsaS53ZWJw" },
        { id: 3, name: "Ravi", donations: 5200, img: "https://imgs.search.brave.com/4i11i4BhkA1zEIkMg2tpmnNiXjbdQccnIdAnMHZD2ho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzM5LzIzLzIw/LzM2MF9GXzczOTIz/MjAzOF9SZ1Ayc2xW/ek16MVBFY0JqNlh3/T0dEcGpITzV2czZw/Ry5qcGc" },
        { id: 4, name: "Ishita", donations: 4300, img: "https://imgs.search.brave.com/n59pRqxPhzAWV9Zg-98uou2tsLebNdfEpi1nT6L8qlM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvZmlsZXBpY3R1/cmUuYWkvc3R5bGVz/L2doaWJsaS53ZWJw" },
    ]

    return (
        <div className="min-h-screen bg-[#fffaf7] py-10 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-[#ff582c] mb-8">Top Interns</h1>

            <div className="w-full max-w-xl space-y-4">
                {leaders.map((user, index) => (
                    <div
                        key={user.id}
                        className="flex items-center bg-white p-4 rounded-2xl shadow-md border border-[#ff582c]/20 hover:scale-[1.02] transition"
                    >
                        <div className="flex-shrink-0">
                            <img
                                src={user.img}
                                alt={user.name}
                                width={50}
                                height={50}
                                className="rounded-full border-2 border-[#ff582c]/40"
                            />
                        </div>

                        <div className="ml-4 flex-1">
                            <h3 className="text-lg font-semibold text-[#000824]">{index + 1}. {user.name}</h3>
                            <p className="text-[#ff582c] font-bold">₹ {user.donations}</p>
                        </div>

                        {index == 0 && <FaCrown />}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Leaderboard
