import React from 'react'
import SignOutButton from './sign-out-button';


export default function HeaderContainer({ welcomeMessage }) {
    return (
        <nav className="nav flex justify-center">
            <div className="message">
                {welcomeMessage}
            </div>
            <div className="flex justify-end">
                <SignOutButton />
            </div>
        </nav>
    )
}
