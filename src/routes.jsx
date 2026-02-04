import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Erro404 from './pages/Erro'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

import Favorites from './pages/Favorites'

function RoutesApp() {
  return (
    <BrowserRouter>
    <Header />
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie/:id' element={<Movie />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='*' element={<Erro404 />} />
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default RoutesApp