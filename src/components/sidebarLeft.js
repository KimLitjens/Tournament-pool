import React from 'react'

export default function SidebarLeft({ children, ...restProps }) {
    return <div {...restProps} className="hidden md:inline w-1/4 h-full ml-2 py-2 border rounded border-yellow-500">{children}</div>
}

SidebarLeft.Title = function Title({ children, ...restProps }) {
    return <h2 {...restProps} className="text-center">{children}</h2>
}

SidebarLeft.Games = function Games({ children, ...restProps }) {
    return <div {...restProps} className="flex flex-col">{children}</div>
}

SidebarLeft.Game = function Game({ children, ...restProps }) {
    return <div {...restProps} className="flex justify-center mt-1">{children}</div>
}

SidebarLeft.Logo = function Logo({ children, ...restProps }) {
    return <img {...restProps} className="w-8 h-8" />
}

SidebarLeft.ShortName = function ShortName({ children, ...restProps }) {
    return <p {...restProps} className="mx-3 self-center w-7 text-center">{children}</p>
}

SidebarLeft.Score = function Score({ children, ...restProps }) {
    return <p {...restProps} className="ml-2 self-center">{children}</p>
}