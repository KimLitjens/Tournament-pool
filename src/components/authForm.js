import React from 'react'
import { Link } from 'react-router-dom';

export default function AuthForm({ children, restProps }) {
    return <div {...restProps}>{children}</div>
}

AuthForm.Page = function Page({ children, ...restProps }) {
    return <div {...restProps} className="flex flex-col text-center max-w-sm mx-auto my-o">{children}</div>
}

AuthForm.Form = function Form({ children, ...restProps }) {
    return <form {...restProps} className="p-5 flex flex-col">{children}</form>
}

AuthForm.Title = function Title({ children, ...restProps }) {
    return <h1 {...restProps} className="text-primary">{children}</h1>
}

AuthForm.Input = function Input({ children, ...restProps }) {
    return <input {...restProps} className="p-2 m-2 rounded-full border-2 border-gray-200 placeholder-gray-400 font-bold" />
}

AuthForm.Submit = function Submit({ children, ...restProps }) {
    return <button {...restProps} className="
    relative self-center w-2/3 py-2 px-0 text-white font-bold text-sm cursor-pointer rounded-full bg-gradient-to-r from-blue-800 to-blue-500 border-transparent m-10">{children}</button>
}

AuthForm.Formlink = function Formlink({ children, ...restProps }) {
    return <Link {...restProps} className="font-bold text-xs text-primary">{children}</Link>
}

AuthForm.ErrorMessage = function ErrorMessage({ children, ...restProps }) {
    return <div {...restProps} className="text-red-600 text-xs m-2 ">{children}</div>
}