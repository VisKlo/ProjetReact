import axios from "axios"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addFavSeries } from "../components/Features/slices/favoriteSeries"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Pagination } from "../components/Pagination"

export function Series() {
    const [series, setSeries] = useState(null)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const token = useSelector((state) => state.token.value)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${token}&language=fr&page=${page}`)
                setSeries(response.data)
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
                <h2>Listes de séries</h2>
                <ul className={"dflex liste"}>
                    {series.results.map((serie)  => (
                        <li key={serie.id}>
                            <Link key={serie.id} to={`/serie/${serie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`} alt={serie.name} />
                            </Link>
                            <button onClick={() => dispatch(addFavSeries(serie.id))}>Favori</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Pagination page={page} totalPages={series.total_page} previous={() => setPage(page - 1)} next={() => setPage(page + 1)}/>
        </>
    )
}