import { useNavigate } from "react-router-dom"
import { ButtonRedirect } from "../components/buttons/ButtonRedirect"
import { SearchBar } from "../components/SearchBar"

function SearchPage() {

    const navigate = useNavigate()

    const redirectHomePage = () => {
        navigate("/")
    }

    return <>
        <ButtonRedirect label="Retour à l'accueil" route="/" />
        <div className="container my-5">
            <h3>Rechercher un verbe</h3>
        </div>
        <SearchBar />
    </>
}

export default SearchPage