import { Link } from "react-router-dom"

export function HomePage() {
    return (
        <div className="home-page">
            <h1>Bienvenue !</h1>
            <p>Explorez les films et séries.</p>

            <div className="cta">
                <h2>Commencez maintenant</h2>
                <div className="links">
                    <Link to="/films" className="cta-button">Voir les Films</Link>
                    <Link to="/series" className="cta-button">Voir les Séries</Link>
                    <Link to="/favorites" className="cta-button">Voir les Favoris</Link>
                </div>
            </div>
        </div>
    )
}