import React from 'react'

export default function MatchDetails({ children, ...restProps }) {
    return <div {...restProps} >{children}</div>
}

MatchDetails.Games = function Games({ children, ...restProps }) {
    return <div {...restProps} className="flex flex-col">{children}</div>
}

MatchDetails.Game = function Game({ children, ...restProps }) {
    return <div {...restProps} className=" grid justify-items-center mt-1">{children}</div>
}

MatchDetails.Logo = function Logo({ children, ...restProps }) {
    return <img {...restProps} className="w-8 h-8" />
}

MatchDetails.ShortName = function ShortName({ children, ...restProps }) {
    return <p {...restProps} className="mx-3 self-center w-7 text-center">{children}</p>
}

MatchDetails.Score = function Score({ children, ...restProps }) {
    return <p {...restProps} className="ml-2 self-center text-center">{children}</p>
}

MatchDetails.DeleteButton = function DeleteButton({ children, ...restProps }) {
    return <button {...restProps} className="
    flex justify-center py-1 px-1 ml-2
    text-white font-bold text-sm 
    cursor-pointer 
    rounded-full bg-gradient-to-r from-red-800 to-red-500 border-transparent 
    ">{children}</button>
}