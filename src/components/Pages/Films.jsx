import axios from "axios"
import { useEffect, useState } from "react"
import '../style.css'
import { Link } from "react-router-dom"

export function Films() {
    const [films, setFilms] = useState(null)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const token = "4709a93217ceb21136419edae4b69f6b"
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${token}&language=fr&page=${page}`)
                setFilms(response.data)
                setLoading(false)
            } catch (error) {
                console.error(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [page])

    if (loading)
        return <p>Chargement en cours ...</p>

    return (
        <>
            <div>
                <h2>Listes de films</h2>
                <ul className={"dflex"}>
                    {films.results.map((film)  => (
                        <li key={film.id}>
                            <Link key={film.id} to={`/film/${film.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title} />
                            </Link>
                            <button>Favori</button>
                        </li>
                        
                    ))}
                </ul>
            </div>
            <div className="pagination">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>précédent</button>
                <button onClick={() => setPage(page+1)} disabled={page === films.total_pages}>suivant</button>
            </div>
        </>
        
    )
}