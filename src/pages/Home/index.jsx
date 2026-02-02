import { useEffect, useState } from 'react'
import api from '../../services/api'

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
      setMovies(response.data.results)
      setLoading(false)
    }
    getMovies()
  }, [])

  if(loading) {
    return <div>Carregando...</div>
  } 

    return (
      <div>
        <h1>Home</h1>
        {movies && movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.original_title}</h2>
          </div>
        ))}
      </div>
    )

}

export default Home