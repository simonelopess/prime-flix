import { useState } from "react"
import { Link } from "react-router-dom"
import './Favorites.css'

function Favorites() {
    const [movies, setMovies] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('@primeflix') ?? '[]') ?? []
        } catch {
            return []
        }
    })

    function removeMovie(id) {
        const next = movies.filter((m) => m.id !== id)
        setMovies(next)
        localStorage.setItem('@primeflix', JSON.stringify(next))
    }

    if (movies.length === 0) {
        return (
            <div className="my-movies">
                <h1>Meus Filmes</h1>
                <p>Você não tem nenhum filme favorito ainda.</p>
            </div>
        )
    }

    return (
        <div className="my-movies">
            <h1>Meus Filmes</h1>
            <ul>
                {movies && movies.map(movie => (
                    <li key={movie.id}>
                        <span>{movie.title}</span>
                        <div>
                            <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
                            <button type="button" onClick={() => removeMovie(movie.id)}>Excluir</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites