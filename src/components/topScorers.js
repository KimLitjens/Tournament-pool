import React from 'react'

export default function TopScorers({ children, ...restProps }) {
    return <div {...restProps} className="hidden md:inline w-1/4 h-full mr-2 p-2 border rounded border-yellow-500">{children}</div>
}

TopScorers.List = function List({ children, ...restProps }) {
    return <div {...restProps} className="p-4" > {children} </div>
}

TopScorers.TopScorer = function TopScorer({ children, ...restProps }) {
    return <h3 {...restProps}> {children} </h3>
}

