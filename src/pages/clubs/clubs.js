import React from 'react'
import { useParams } from 'react-router-dom'

export default function Clubs() {
    const { club, id } = useParams()
    console.log("club id is:", id)
    return (
        <div>
            <h2 className="text-center">{club}</h2>
        </div>
    )
}
