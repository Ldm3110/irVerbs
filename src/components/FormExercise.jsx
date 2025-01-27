import { useEffect, useState } from "react"
import { getRandomElement } from "../utils/functions"
import VERBS from "../ressource/verbs"
import InputExcercise from "./InputExercise"


export function FormExercise() {

    // Button states
    const [jokerCounter, setJokerCounter] = useState(3)
    const [disable, setDisable] = useState(false)
    const [valid, setValid] = useState(false)

    // validators
    const [base, setBase] = useState(false)
    const [pPasse, setPartSimple] = useState(false)
    const [pParticiple, setPastPart] = useState(false)

    // Verb
    const [verb, setNewVerb] = useState(getRandomElement(VERBS))

    // functions
    const newVerb = () => {
        setNewVerb(getRandomElement(VERBS))
        setValid(false)
    }

    useEffect(() => {
        if (base == true && pPasse == true && pParticiple == true) {
            setValid(true)
        } else {
            setValid(false)
        }
    }, [base, pPasse, pParticiple])

    let baseCounter = jokerCounter
    const useJoker = () => {
        setJokerCounter(baseCounter -= 1)
        newVerb()
        if (baseCounter == 0) {
            setDisable(true)
        }
    }

    return <>
        <form>
            <h3 className="my-5">{verb.French}</h3>
            <div className="d-flex justify-content-between my-5">
                <InputExcercise target={verb.base} placeholder="Infinitif" newState={setBase} />
                <InputExcercise target={verb.pSimple} placeholder="Passé Simple" newState={setPartSimple} />
                <InputExcercise target={verb.pParticiple} placeholder="Participe passé" newState={setPastPart} />
            </div>
            <div className="d-flex justify-content-around">
                {
                    disable ?
                        <button type="button" onClick={useJoker} disabled>Joker ({jokerCounter})</button> :
                        <button type="button" onClick={useJoker}>Joker ({jokerCounter})</button>
                }
                {
                    valid ?
                        <button type="button" onClick={newVerb}>Prochain verbe</button> :
                        <button type="button" disabled>Prochain verbe</button>
                }
            </div>
        </form>
    </>
}