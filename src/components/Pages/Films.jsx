import axios from "axios"
import { useEffect, useState } from "react"
import '../style.css'
import { Link } from "react-router-dom"

export function Films() {
    const [films, setFilms] = useState(null)
    const [loading, setLoading] = useState(true)
    const token = "4709a93217ceb21136419edae4b69f6b"
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${token}&language=fr`)
                setFilms(response.data)
                setLoading(false)
            } catch (error) {
                console.error(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading)
        return <p>Chargement en cours ...</p>

    return (
        <div>
            <h2>Listes de films</h2>
            <ul class={"dflex"}>
                {films.results.map((film)  => (
                    <Link key={film.id} to={`/film/${film.id}`}>
                        <li>
                            <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title} />
                            <button>Favori</button>
                        </li>
                    </Link>
                    
                ))}
            </ul>
        </div>
    )
}