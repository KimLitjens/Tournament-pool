import React from 'react'

export default function Homepage({ children, restProps }) {
    return <div {...restProps} >{children}</div>
}

Homepage.Page = function Page({ children, ...restProps }) {
    return <div {...restProps} className="pag w-full">{children}</div>
}

Homepage.MainPart = function MainPart({ children, ...restProps }) {
    return <div {...restProps} className="mainPart md:flex flex-row justify-between w-full">{children}</div>
}

Homepage.MiddlePart = function MiddlePart({ children, ...restProps }) {
    return <div {...restProps} className="middle justify-center">{children}</div>
}
