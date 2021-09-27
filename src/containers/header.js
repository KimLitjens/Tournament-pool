import React from 'react'

export default function HeaderContainer({ welcomeMessage }) {
    return (
        <nav className="nav flex justify-center">
            <div className="message">
                {welcomeMessage}
            </div>
        </nav>
    )
}
