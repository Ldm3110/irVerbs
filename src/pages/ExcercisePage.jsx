import { useNavigate } from "react-router-dom"
import { ButtonRedirect } from "../components/ButtonRedirect"

function ExcercisePage() {

    const navigate = useNavigate()

    const redirectHomePage = () => {
        navigate("/")
    }
    return <>
        <ButtonRedirect
            label="Retour à l'accueil"
            className="d-flex justify-content-end align-items-start btn-sm"
            onClick={redirectHomePage}
        />
        <h2>Testes-toi !!</h2>
    </>
}

export default ExcercisePage