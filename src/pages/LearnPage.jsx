import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { ButtonRedirect } from "../components/ButtonRedirect";

import { VerbRender } from "../components/VerbRender";

import VERBS from '../ressource/verbs.js'

function learnPage() {

    const navigate = useNavigate()
    const [randomVerb, setRandomVerb] = useState(getRandomElement(VERBS))

    function getRandomElement(verbList) {
        const randomIndex = Math.floor(Math.random() * verbList.length);
        return verbList[randomIndex];
    }

    const nextVerb = () => {
        setRandomVerb(getRandomElement(VERBS))
    }

    const redirectHomePage = () => {
        navigate("/")
    }
    return <>
        <ButtonRedirect
            label="Retour à l'accueil"
            className="d-flex justify-content-end align-items-start"
            onClick={redirectHomePage}
        />
        <h2 className="mt-5">Apprendre les verbes !</h2>
        <div className="container mt-5">
            <VerbRender randomVerb={randomVerb} nextVerb={nextVerb} />
        </div>
        <button className="mt-5" type="button" onClick={nextVerb}>Verbe suivant</button>
    </>
}

export default learnPage