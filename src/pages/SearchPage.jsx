import { useNavigate } from "react-router-dom"
import { ButtonRedirect } from "../components/ButtonRedirect"
import { SearchBar } from "../components/SearchBar"

function SearchPage() {

    const navigate = useNavigate()

    const redirectHomePage = () => {
        navigate("/")
    }

    return <>
        <ButtonRedirect
            label="Retour à l'accueil"
            className="d-flex justify-content-end align-items-start"
            onClick={redirectHomePage}
        />
        <div className="container my-5">
            <h3>Rechercher un verbe</h3>
        </div>
        <SearchBar />
    </>
}

export default SearchPage