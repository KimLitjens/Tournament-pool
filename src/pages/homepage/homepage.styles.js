import React from 'react'

export default function Styles({ children, restProps }) {
    return <div {...restProps} >{children}</div>
}

Styles.Page = function Page({ children, ...restProps }) {
    return <div {...restProps} className="pag w-full">{children}</div>
}

Styles.MainPart = function MainPart({ children, ...restProps }) {
    return <div {...restProps} className="mainPart md:flex flex-row justify-between w-full">{children}</div>
}

Styles.MiddlePart = function MiddlePart({ children, ...restProps }) {
    return <div {...restProps} className="middle justify-center">{children}</div>
}
