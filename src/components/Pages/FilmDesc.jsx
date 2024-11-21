import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export function FilmDesc() {
    const { movieId } = useParams()
    const [film, setFilm] = useState(null)
    const [loading, setLoading] = useState(true)
    const token = useSelector((state) => state.token.value)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${token}&language=fr`)
                setFilm(response.data)
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
            <h2>Description du film</h2>
            <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title} />
            <h3>{film.title}</h3>
            <p>Genre(s) :</p>
            <ul>
                {film.genres.map((genre) => (
                    <li>{ genre.name }</li>
                ))}
            </ul>
            <p>{film.overview}</p>
            <p>Date de sortie : {film.release_date}</p>
        </div>
    )
}