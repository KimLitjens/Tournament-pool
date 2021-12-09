import React from 'react'

export default function Clubs({ children, restProps }) {
    return <div {...restProps}>{children}</div>
}

Clubs.Page = function Page({ children, ...restProps }) {
    return <div {...restProps} >{children}</div>
}

Clubs.Title = function Title({ children, ...restProps }) {
    return <h2 {...restProps} className="text-center">{children}</h2>
}

Clubs.MainDiv = function MainDiv({ children, ...restProps }) {
    return <div {...restProps} className="flex justify-between">{children}</div>
}

Clubs.LeftDiv = function LeftDiv({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>
}

Clubs.Loading = function Loading({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>
}

Clubs.FinishedLoading = function FinishedLoading({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>
}

Clubs.MiddleDiv = function MiddleDiv({ children, ...restProps }) {
    return <div {...restProps} >{children}</div>
}

Clubs.CenterText = function CenterText({ children, ...restProps }) {
    return <p {...restProps} className="text-center my-2">{children}</p>
}

Clubs.LogoDiv = function LogoDiv({ children, ...restProps }) {
    return <div {...restProps} className="flex justify-center">{children}</div>
}

Clubs.LogoText = function LogoText({ children, ...restProps }) {
    return <p {...restProps} className="text-center self-center">{children}</p>
}

Clubs.LogoImg = function LogoImg({ children, ...restProps }) {
    return <img {...restProps} className="w-10 h-10 justify-center" />
}
