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
    return <div {...restProps} className="w-full flex justify-center mt-1">{children}</div>
}

ScoreForm.Label = function Label({ children, ...restProps }) {
    return <label {...restProps} className="flex">{children}</label>
}

ScoreForm.Logo = function Logo({ children, ...restProps }) {
    return <img {...restProps} className="w-8 h-8" />
}

ScoreForm.ShortName = function ShortName({ children, ...restProps }) {
    return <p {...restProps} className="w-10 mx-2 self-center text-center">{children}</p>
}

ScoreForm.Input = function Input({ children, ...restProps }) {
    return <input {...restProps} className="shadow appearance-none border rounded w-10 mx-2 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{children}</input>
}

ScoreForm.Button = function Button({ children, ...restProps }) {
    return <button {...restProps} className="relative self-center w-2/3 py-2 px-0 text-white font-bold text-sm cursor-pointer rounded-full bg-gradient-to-r from-blue-800 to-blue-500 border-transparent m-10">{children}</button>
}

