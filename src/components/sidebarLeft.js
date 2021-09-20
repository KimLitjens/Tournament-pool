import React from 'react'

export default function SidebarLeft({ children, ...restProps }) {
    return <div {...restProps} className="hidden md:inline w-1/4">{children}</div>
}

SidebarLeft.Title = function Title({ children, ...restProps }) {
    return <h2 {...restProps}>{children}</h2>
}