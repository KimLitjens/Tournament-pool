import React from 'react'
import SignOutButton from './sign-out-button';


export default function FooterContainer({ welcomeMessage }) {
    return (
        <div className="flex justify-center mt-10">
            <SignOutButton />
        </div>
    )
}
