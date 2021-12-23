import React from 'react'

export default function TopScorers({ children, ...restProps }) {
    return <div {...restProps} className="hidden md:inline w-1/4">{children}</div>
}

TopScorers.List = function List({ children, ...restProps }) {
    return <div {...restProps} className="p-4" > {children} </div>
}

TopScorers.TopScorer = function TopScorer({ children, ...restProps }) {
    return <h3 {...restProps}> {children} </h3>
}

