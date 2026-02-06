import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import api from "../../services/api"
import { toast } from 'react-toastify'
import './Movie.css'


function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)


  
  const navigation = useNavigate()

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
        toast.error('Erro ao carregar detalhes do filme: ' + error.message)
        navigation('/', { replace: true })
        setLoading(false)
      })

    }
    getMovie()

    return () => {
      setMovie(null)
      setLoading(true)
    }
  }, [id, navigation])

  function SaveMovie() {
    const myMovies = localStorage.getItem('@primeflix')
    let moviesSaved = JSON.parse(myMovies) || []
    
    const hasMovie = moviesSaved.some((movieSaved) => movieSaved.id === movie.id)
    if(hasMovie) {
      toast.warning('Este filme já está na sua lista!')
      return
    }
    moviesSaved.push(movie)
    localStorage.setItem('@primeflix', JSON.stringify(moviesSaved))
    toast.success('Filme salvo com sucesso!')
  }

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
        <button onClick={SaveMovie}>Salvar</button>
        <button>
          <a href={`https://www.youtube.com/results?search_query=${movie.original_title} trailer`}
          target='_blank'
          rel='external'
          >
            Assistir Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

export default Movie