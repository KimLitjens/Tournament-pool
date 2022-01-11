import React from 'react'
import { Link } from "react-router-dom";

export default function GroupStanding({ children, restProps }) {
    return <div {...restProps} >{children}</div>
}

GroupStanding.Title = function Title({ children, ...restProps }) {
    return <h1 {...restProps} className="text-center">{children}</h1>
}

GroupStanding.Table = function Table({ children, ...restProps }) {
    return <table {...restProps} className="table-auto">{children}</table>
}

GroupStanding.Thead = function Thead({ children, ...restProps }) {
    return <thead {...restProps} >{children}</thead>
}

GroupStanding.Tr = function Tr({ children, ...restProps }) {
    return <Tr {...restProps} >{children}</Tr>
}

GroupStanding.Th = function Th({ children, ...restProps }) {
    return <th {...restProps} >{children}</th>
}

GroupStanding.ThAbbreviated = function ThAbbreviated({ children, ...restProps }) {
    return <th {...restProps} className="px-4">{children}</th>
}

GroupStanding.Td = function Td({ children, ...restProps }) {
    return <td {...restProps} >{children}</td>
}

GroupStanding.TeamPosition = function TeamPosition({ children, ...restProps }) {
    return <p {...restProps} className="m-2 self-center">{children}</p>
}

GroupStanding.Linking = function Linking({ children, ...restProps }) {
    return <Link {...restProps} className="flex" >{children}</Link>
}

GroupStanding.Image = function Image({ children, ...restProps }) {
    return <img {...restProps} className="w-8 h-8 self-center" />
}

GroupStanding.SubTitle = function SubTitle({ children, ...restProps }) {
    return <h2 {...restProps} className="w-52 text-center self-center" >{children}</h2>
}

GroupStanding.Text = function Text({ children, ...restProps }) {
    return <p {...restProps} className="self-center text-center">{children}</p>
}