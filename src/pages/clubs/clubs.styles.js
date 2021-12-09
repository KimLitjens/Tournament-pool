import React from 'react'

export default function ClubsStyle({ children, restProps }) {
    return <div {...restProps}>{children}</div>
}

ClubsStyle.Page = function Page({ children, ...restProps }) {
    return <div {...restProps} >{children}</div>
}

ClubsStyle.Title = function Title({ children, ...restProps }) {
    return <h2 {...restProps} className="text-center">{children}</h2>
}

ClubsStyle.MainDiv = function MainDiv({ children, ...restProps }) {
    return <div {...restProps} className="flex justify-between">{children}</div>
}

ClubsStyle.LeftDiv = function LeftDiv({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>
}

ClubsStyle.Loading = function Loading({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>
}

ClubsStyle.FinishedLoading = function FinishedLoading({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>
}

ClubsStyle.MiddleDiv = function MiddleDiv({ children, ...restProps }) {
    return <div {...restProps} >{children}</div>
}

ClubsStyle.CenterText = function CenterText({ children, ...restProps }) {
    return <p {...restProps} className="text-center my-2">{children}</p>
}

ClubsStyle.LogoDiv = function LogoDiv({ children, ...restProps }) {
    return <div {...restProps} className="flex justify-center">{children}</div>
}

ClubsStyle.LogoText = function LogoText({ children, ...restProps }) {
    return <p {...restProps} className="text-center self-center">{children}</p>
}

ClubsStyle.LogoImg = function LogoImg({ children, ...restProps }) {
    return <img {...restProps} className="w-10 h-10 justify-center" />
}
