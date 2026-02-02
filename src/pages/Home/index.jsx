import { useEffect, useState } from 'react'
import api from '../../services/api'
import "./Home.css"
import { Link } from 'react-router-dom'

function Home() {   
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getMovies() {
      const response = await api.get('movie/now_playing', 
        {
          params: {
            api_key: '01c1e9c3bc64272ab9e34515f52aedf5',
            language: 'pt-BR',
            page: 1,
          }
        }
      )
      setMovies(response.data.results.slice(0, 10))
      setLoading(false)
    }
    getMovies()
  }, [])

  if(loading) {
    return <div>Carregando...</div>
  } 

    return (
      <div className='container'>
        <div className='movies-list'>
        {movies && movies.map((movie) => (
          <div key={movie.id} className='movies-list'>
            <article>
              <strong>{movie.original_title}</strong>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
              <Link to={`/movie/${movie.id}`}>Detalhes</Link>
            </article>
          </div>
        ))}
        </div>
      </div>
    )

}

export default Home