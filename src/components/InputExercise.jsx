import { useState, useEffect } from "react"

function InputExcercise({ target, placeholder, newState }) {

    const [value, setValue] = useState("")

    const inputStyle = {
        borderRadius: '8px',
        backgroundColor: 'white',
        color: value === "" ? 'black' : value === target ? 'green' : 'red',
        fontWeight: value === "" ? 'normal' : 'bold',
        textAlign: 'center',
    }

    const changeValue = (e) => {
        setValue(e.target.value)
        if (e.target.value === target) {
            console.log("true")
            newState(true)
        } else {
            newState(false)
        }
    }

    return <>
        <input
            type="text"
            value={value}
            onChange={changeValue}
            placeholder={placeholder}
            style={inputStyle}
        />{target}
    </>
}

export default InputExcercise

