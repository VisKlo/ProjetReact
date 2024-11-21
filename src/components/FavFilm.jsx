import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import axios from "axios"

export function FavFilm() {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)
    const favFilms = useSelector((state) => state.favoriteFilms.arrFilms)
    const token = useSelector((state) => state.token.value)

    useEffect(() => {
        const uniqueFavFilms = [...new Set(favFilms)]
        const fetchData = async () => {
            try {
                const responses = await Promise.all(uniqueFavFilms.map((id) => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${token}&language=fr`)))
                setFilms(responses.map((response) => response.data))
                setLoading(false)
            } catch (error) {
                console.error(error)
                setLoading(false)
            }
        }

        if (favFilms.length > 0) {
            fetchData()
        } else {
            setLoading(false)
        }

    }, [favFilms])

    

    if (loading) 
        return <p>Chargement en cours ...</p>

    return (
        <div className="favorites">
            <h2>Films favoris :</h2>
            {films.length > 0 ? (
                <ul>
                    {films.map((film) => (
                        <li key={film.id}>{film.title}</li>
                    ))}
                </ul>
            ) : (
                <p>Vous n'avez pas encore de films favoris.</p>
            )}
        </div>
    )
}