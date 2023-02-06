import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void
}

export default function Button({ onClick, ...props }: ButtonProps) {
    const baseStyle = 'px-4 py-2 rounded-md shadow-sm font-medium text-white'
    const primaryStyle = 'bg-indigo-400 hover:bg-indigo-700 focus:outline-none'
    const disabledStyle = 'opacity-50 cursor-not-allowed'

    const buttonClassName = clsx(
        baseStyle,
        primaryStyle,
        props.disabled ? disabledStyle : null
    )

    return (
        <button className={buttonClassName} onClick={onClick} {...props}>
            {props.children}
        </button>
    )
}
