import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import api from "../../services/api"

import './Movie.css'

function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getMovie() {
       await api.get(`/movie/${id}`, {
        params: {
          api_key: '01c1e9c3bc64272ab9e34515f52aedf5',
          language: 'pt-BR',
        }
      })
      .then(data => {
        setMovie(data.data)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })

    }
    getMovie()

    return () => {
      setMovie(null)
      setLoading(true)
    }
  }, [id])

  if(loading) {
    return <div className='movie-info'><h2>Carregando detalhes...</h2></div>
  }
  return (
    <div className='movie-info'>
      <h1>{movie.original_title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title} />
      <h3>Sinopse</h3>
      <span>{movie.overview}</span>
      <strong>Avaliação: {movie.vote_average} / 10</strong>

      <div className='buttons'>
        <button onClick={() => {}}>Salvar</button>
        <button>
          <a href={`#`}
          target='_blank'
          rel='noopener noreferrer'
          >
            Assistir Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

export default Movie