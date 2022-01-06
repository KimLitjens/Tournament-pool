import React from 'react'

export default function ScoreForm({ children, restProps }) {
    return <div {...restProps} className="px-2 border rounded border-yellow-500">{children}</div>
}

ScoreForm.Title = function Title({ children, ...restProps }) {
    return <h1 {...restProps} className="text-center">{children}</h1>
}

ScoreForm.Loading = function Loading({ children, ...restProps }) {
    return <p {...restProps} className="text-center">{children}</p>
}

ScoreForm.Form = function Form({ children, ...restProps }) {
    return <form {...restProps} className="form ">{children}</form>
}

ScoreForm.Section = function Section({ children, ...restProps }) {
    return <section {...restProps}>{children}</section>
}

ScoreForm.List = function List({ children, ...restProps }) {
    return <ul {...restProps}>{children}</ul>
}

ScoreForm.ListItem = function ListItem({ children, ...restProps }) {
    return <li {...restProps} className="w-full flex justify-center mt-1">{children}</li>
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
    return <input {...restProps}
        className="shadow appearance-none border rounded-full
     w-10 mx-2 py-1 px-1 text-gray-700 leading-tight 
     focus:outline-none focus:shadow-outline"
    >{children}</input>
}

ScoreForm.Button = function Button({ children, ...restProps }) {
    return <button {...restProps} className="
    flex justify-center py-2 px-0 my-10 mx-auto
    text-white font-bold text-sm 
    cursor-pointer 
    rounded-full bg-gradient-to-r from-blue-800 to-blue-500 border-transparent 
    my-10 mx-auto
    w-1/4 
    md:w-1/2
    ">{children}</button>
}

ScoreForm.DeleteButton = function DeleteButton({ children, ...restProps }) {
    return <button {...restProps} className="
    flex justify-center py-1 px-1 ml-2
    text-white font-bold text-sm 
    cursor-pointer 
    rounded-full bg-gradient-to-r from-red-800 to-red-500 border-transparent 
    ">{children}</button>
}

