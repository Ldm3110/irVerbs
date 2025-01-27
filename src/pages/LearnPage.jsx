import { useNavigate } from "react-router-dom";
import { ButtonRedirect } from "../components/buttons/ButtonRedirect";

import { VerbRender } from "../components/VerbRender";


function LearnPage() {

    return <>
        <ButtonRedirect label="Retour à l'accueil" route="/" />
        <h2 className="mt-5">Apprendre les verbes !</h2>
        <div className="container mt-5">
            <VerbRender />
        </div>

    </>
}

export default LearnPage