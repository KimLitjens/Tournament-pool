import React from 'react'

export default function AuthForm({ children, restProps }) {
    return <div {...restProps}>{children}</div>
}

AuthForm.Form = function Form({ children, ...restProps }) {
    return <form {...restProps} className="p-5 flex flex-col">{children}</form>
}

AuthForm.Submit = function Submit({ children, ...restProps }) {
    return <button {...restProps} className="m-10">{children}</button>
}

AuthForm.Input = function Input({ children, ...restProps }) {
    return <input {...restProps} />
}

