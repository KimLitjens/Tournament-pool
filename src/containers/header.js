import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../utils/hooks/useAuth';


export default function HeaderContainer() {
    const userInfo = useAuth();
    const [auth, setAuth] = useState({});

    useEffect(() => {
        setAuth(userInfo)
    }, [userInfo]);

    const welcomeMessage = auth?.currentUser?.displayName
        ? `Welcome ${auth?.currentUser?.displayName}`
        : 'Welcome';

    return (
        <nav className="nav flex justify-between">
            <div className="flex content-center">
                <Link to={`/`}
                    className="flex self-center mx-4"
                >
                    <button
                        className="
                                    text-white font-bold text-sm 
                                    cursor-pointer 
                                    flex justify-center py-2 px-4 mx-4
                                    rounded-full bg-gradient-to-r from-blue-800 to-blue-500 border-transparent "                    >
                        Home
                    </button>
                </Link>
            </div>
            <div className="my-2 flex self-center text-center text-4xl text-blue-800">
                {welcomeMessage}
            </div>
            <div className="flex content-center">
                <Link
                    to={`/predictions`}
                    className="flex self-center mx-4"
                >
                    <button
                        className="
                                    text-white font-bold text-sm 
                                    cursor-pointer 
                                    flex justify-center py-2 px-4 mx-4
                                    rounded-full bg-gradient-to-r from-blue-800 to-blue-500 border-transparent"
                    >
                        Predictions
                    </button>
                </Link>
            </div>
        </nav>
    )
}
