import React from 'react'

export default function SidebarRight({ children, ...restProps }) {
    return <div {...restProps} className="hidden md:inline w-1/4">{children}</div>
}

SidebarRight.Title = function Title({ children, ...restProps }) {
    return <h2 {...restProps} className="text-center">{children}</h2>
}

SidebarRight.Games = function Games({ children, ...restProps }) {
    return <div {...restProps} className="flex flex-col">{children}</div>
}

SidebarRight.Game = function Game({ children, ...restProps }) {
    return <div {...restProps} className="flex justify-center mt-1">{children}</div>
}

SidebarRight.Logo = function Logo({ children, ...restProps }) {
    return <img {...restProps} className="w-8 h-8" />
}

SidebarRight.ShortName = function ShortName({ children, ...restProps }) {
    return <p {...restProps} className="mx-3 self-center w-7 text-center">{children}</p>
}

