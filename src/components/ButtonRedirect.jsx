import { useState } from "react"

export function ButtonRedirect({ label, value, className, onClick }) {

    return <button
        className={className}
        type="button"
        onClick={onClick}
        value={value}
    >
        {label}
    </button>
}