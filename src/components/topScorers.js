import React from 'react'

export default function TopScorers({ children, ...restProps }) {
    return <div {...restProps} className="">{children}</div>
}

TopScorers.List = function List({ children, ...restProps }) {
    return <div {...restProps}> {children} </div>
}

TopScorers.TopScorer = function TopScorer({ children, ...restProps }) {
    return <h3 {...restProps}> {children} </h3>
}

