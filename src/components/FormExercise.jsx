import { useState } from "react"
import { getRandomElement } from "../utils/functions"
import VERBS from "../ressource/verbs"


const styleInput = {
    borderRadius: '8px',
    backgroundColor: 'white',
    color: 'black'
}

export function FormExercise() {

    const [jokerCounter, setJokerCounter] = useState(3)
    const [disable, setDisable] = useState(false)
    const [valid, setValid] = useState(false)

    const verb = getRandomElement(VERBS)

    let baseCounter = jokerCounter
    const useJoker = () => {
        setJokerCounter(baseCounter -= 1)
        if (baseCounter == 0) {
            setDisable(true)
        }
    }

    return <>
        <form>
            <h3 className="my-5">{verb.French}</h3>
            <div className="d-flex justify-content-between my-5">
                <input placeholder="infinitif" type="text" name="" id="" style={styleInput} />
                <input placeholder="Passé Simple" type="text" name="" id="" style={styleInput} />
                <input placeholder="Participe passé" type="text" name="" id="" style={styleInput} />
            </div>
            <div className="d-flex justify-content-around">
                {
                    disable ?
                        <button type="button" onClick={useJoker} disabled>Joker ({jokerCounter})</button> :
                        <button type="button" onClick={useJoker}>Joker ({jokerCounter})</button>
                }
                {
                    valid ?
                        <button type="button">Prochain verbe</button> :
                        <button type="button" disabled>Prochain verbe</button>
                }
            </div>
        </form>
    </>
}