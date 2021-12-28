import React from 'react'

export default function MatchDetails({ children, ...restProps }) {
    return <div {...restProps} >{children}</div>
}

MatchDetails.Games = function Games({ children, ...restProps }) {
    return <div {...restProps} className="flex flex-col">{children}</div>
}

MatchDetails.Game = function Game({ children, ...restProps }) {
    return <div {...restProps} className="flex justify-center mt-1">{children}</div>
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