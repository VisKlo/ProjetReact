import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addFavFilm } from "../components/Features/slices/favoriteFilms"
import { useSelector } from "react-redux"
import { Pagination } from "../components/Pagination"

export function Films() {
    const [films, setFilms] = useState(null)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const token = useSelector((state) => state.token.value)
    const dispatch = useDispatch()
    
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
                <ul className={"dflex liste"}>
                    {films.results.map((film)  => (
                        <li key={film.id}>
                            <Link to={`/film/${film.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title} />
                            </Link>
                            <button onClick={() => dispatch(addFavFilm(film.id))}>Favori</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Pagination page={page} totalPages={films.total_page} previous={() => setPage(page - 1)} next={() => setPage(page + 1)} />
        </>
        
    )
}