import { useNavigate } from "react-router-dom"
import { ButtonRedirect } from "../components/ButtonRedirect"
import { FormExercise } from "../components/FormExercise"

function ExcercisePage() {

    const navigate = useNavigate()

    const redirectHomePage = () => {
        navigate("/")
    }
    return <>
        <ButtonRedirect
            label="Retour à l'accueil"
            className="d-flex justify-content-end align-items-start btn-sm mb-5"
            onClick={redirectHomePage}
        />
        <h2 className="mt-5">Testes-toi !!</h2>
        <div className="container">
            <FormExercise />
        </div>
    </>
}

export default ExcercisePage