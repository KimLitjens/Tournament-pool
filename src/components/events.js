import React from 'react'

export default function Events({ children, restProps }) {
    return <div {...restProps} className="my-2">{children}</div>
}

Events.Title = function Title({ children, ...restProps }) {
    return <h3 {...restProps} className="text-center font-bold" >{children}</h3>
}

Events.Info = function Info({ children, ...restProps }) {
    return <div {...restProps} className="flex justify-between" >{children}</div>
}

Events.Event = function Event({ children, ...restProps }) {
    return <div {...restProps} className="ml-2" >{children}</div>
}

Events.EventRight = function Event({ children, ...restProps }) {
    return <div {...restProps} className="mr-2" >{children}</div>
}

Events.EventInfo = function EventInfo({ children, ...restProps }) {
    return <div {...restProps} >{children}</div>
}

Events.EventTitle = function EventTitle({ children, ...restProps }) {
    return <p {...restProps} className="font-bold" >{children}</p>
}

Events.EventText = function EventText({ children, ...restProps }) {
    return <p {...restProps} >{children}</p>
}

