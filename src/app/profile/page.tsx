"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";


export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {

        try {
            await axios.get('/api/users/logout')
            localStorage.removeItem('token');
            toast.success('Logout successful')
            router.push('/login')
            // window.location.reload();
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <hr className="mb-4" />
        <p className="text-xl font-semibold mb-2">Profile Page</p>
        <button
            onClick={logout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out mr-2"
        >
            Logout
        </button>
        
    </div>
</div>
    )
}