import React from 'react'

export default function ScoreForm({ children, restProps }) {
    return <div {...restProps}>{children}</div>
}

ScoreForm.Title = function Title({ children, ...restProps }) {
    return <h1 {...restProps} className="text-center">{children}</h1>
}

ScoreForm.Loading = function Title({ children, ...restProps }) {
    return <p {...restProps}>{children}</p>
}

ScoreForm.Form = function Form({ children, ...restProps }) {
    return <form {...restProps} className="form">{children}</form>
}

ScoreForm.Games = function Games({ children, ...restProps }) {
    <div {...restProps} className="w-full flex justify-center">{children}</div>
}

ScoreForm.Label = function Label({ children, ...restProps }) {
    <label {...restProps} className="flex">{children}</label>
}





