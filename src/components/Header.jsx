import { Link } from "react-router-dom"

export function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Accueil</Link> | <Link to="/films">Films</Link> | <Link to="/series">Séries</Link> | <Link to="/favorites">Favoris</Link>
            </nav>
        </header>
    )
}