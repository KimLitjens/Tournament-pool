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
            <div>

            </div>
            <div className="message">
                {welcomeMessage}
            </div>
            <div className="flex content-center">
                <Link
                    to={`/predictions`}
                    className="flex self-center mx-4"
                >
                    <p className="text-xl">predictions</p>
                </Link>
            </div>
        </nav>
    )
}
