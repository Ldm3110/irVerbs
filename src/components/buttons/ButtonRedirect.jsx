import { Link } from "react-router-dom"

export function ButtonRedirect({ label, route, className }) {

    return (
        <Link to={route}>
            <button>{label}</button>
        </Link>
    )
}