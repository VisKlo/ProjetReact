import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export function FavSerie() {
    const [series, setSeries] = useState([])
    const [loading, setLoading] = useState(true)
    const favSeries = useSelector((state) => state.favoriteSeries.arrSeries)
    const token = useSelector((state) => state.token.value)

    useEffect(() => {
        const uniqueFavSeries = [...new Set(favSeries)]
        const fetchData = async () => {
            try {
                const responses = await Promise.all(uniqueFavSeries.map((id) => axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${token}&language=fr`)))
                setSeries(responses.map((response) => response.data))
                setLoading(false)
            } catch (error) {
                console.error(error)
                setLoading(false)
            }
        }

        if (favSeries.length > 0) {
            fetchData()
        } else {
            setLoading(false)
        }

    }, [favSeries])

    

    if (loading) 
        return <p>Chargement en cours ...</p>

    return (
        <div className="favorites">
            <h2>Séries favorites :</h2>
            {series.length > 0 ? (
                <ul>
                    {series.map((serie) => (
                        <Link key={serie.id} to={`/serie/${serie.id}`}>
                        <li key={serie.id}>{serie.name}</li>
                        </Link>
                    ))}
                </ul>
            ) : (
                <p>Vous n'avez pas encore de series favorites.</p>
            )}
        </div>
    )
}