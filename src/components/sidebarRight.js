import React from 'react'

export default function SidebarRight({ children, ...restProps }) {
    return <div {...restProps} className="hidden md:inline w-1/4">{children}</div>
}

SidebarRight.Title = function Title({ children, ...restProps }) {
    return <h2 {...restProps} className="text-right">{children}</h2>
}