import { useState, useEffect } from "react"

function InputExcercise({ target, placeholder, newState, reset }) {

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
            newState(true)
        } else {
            newState(false)
        }
    }

    useEffect(() => {
        if (reset) {
            setValue("");
            newState(false);
        }
    }, [reset]);

    return <>
        <input
            type="text"
            value={value}
            onChange={changeValue}
            placeholder={placeholder}
            style={inputStyle}
        />
    </>
}

export default InputExcercise

