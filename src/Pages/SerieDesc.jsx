import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export function SerieDesc() {
    const { serieId } = useParams()
    const [serie, setSerie] = useState(null)
    const [loading, setLoading] = useState(true)
    const token = useSelector((state) => state.token.value)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/${serieId}?api_key=${token}&language=fr`)
                setSerie(response.data)
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
        <div className="descr">
            <h2>Description de la série</h2>
            <img src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`} alt={serie.name} />
            <h3>{serie.name}</h3>
            <p>Genre(s) :</p>
            <ul>
                {serie.genres.map((genre) => (
                    <li>{ genre.name }</li>
                ))}
            </ul>
            <p>{serie.overview}</p>
            <p>Date de sortie : {serie.first_air_date}</p>
        </div>
    )
}