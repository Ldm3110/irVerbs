import { useState } from "react"

import VERBS from "../ressource/verbs"
import { getRandomElement } from "../utils/functions"
import { ButtonNextVerb } from "../components/buttons/ButtonNextVerb"
import { VerbTable } from "./VerbTable"

export function VerbRender() {

    const [randomVerb, setRandomVerb] = useState(getRandomElement(VERBS))

    const nextVerb = () => {
        setRandomVerb(getRandomElement(VERBS))
    }

    return <>
        <VerbTable randomVerb={randomVerb} />
        <ButtonNextVerb nextVerb={nextVerb} />
    </>
}