import React from 'react'
import { useParams } from 'react-router-dom'

export default function Players() {
    const { player, id } = useParams();
    console.log('The player id is:', id);

    return (
        <div>
            <h1 className="text-center">{player}</h1>
        </div>
    )
}
