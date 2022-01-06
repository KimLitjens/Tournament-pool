import React from 'react'
import { Link } from 'react-router-dom';

export default function Player({ children, restProps }) {
    return <div {...restProps}>{children}</div>
}

Player.Name = function Name({ children, ...restProps }) {
    return <h1 {...restProps} className="text-center">{children}</h1>
}

Player.Info = function Info({ children, ...restProps }) {
    return <div {...restProps} className="flex justify-between">{children}</div>
}

Player.Middle = function Middle({ children, ...restProps }) {
    return <div {...restProps} className="p-2 h-full border rounded border-yellow-500">{children}</div>
}

Player.Loading = function Loading({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>
}

Player.Personal = function Personal({ children, ...restProps }) {
    return <div {...restProps} >{children}</div>
}