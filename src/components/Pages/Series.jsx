import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import '../style.css'

export function Series() {
    const [series, setSeries] = useState(null)
    const [loading, setLoading] = useState(true)
    const token = "4709a93217ceb21136419edae4b69f6b"
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${token}&language=fr`)
                setSeries(response.data)
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
            <h2>Listes des séries</h2>
            <ul class={"dflex"}>
                {series.results.map((serie)  => (
                    <Link key={serie.id} to={`/serie/${serie.id}`}>
                        <li>
                            <img src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`} alt={serie.name} />
                            <button>Favori</button>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}