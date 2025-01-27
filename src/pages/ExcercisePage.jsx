import { useNavigate } from "react-router-dom"
import { ButtonRedirect } from "../components/buttons/ButtonRedirect"
import { FormExercise } from "../components/FormExercise"

function ExcercisePage() {

    const navigate = useNavigate()

    const redirectHomePage = () => {
        navigate("/")
    }
    return <>
        <ButtonRedirect label="Retour à l'accueil" route="/" />
        <h2 className="mt-5">Entraines-toi !!</h2>
        <div className="container">
            <FormExercise />
        </div>
    </>
}

export default ExcercisePage