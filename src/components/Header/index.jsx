import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
  return (
    <header>
      <Link className='logo' to='/'>Prime Flix</Link>
      <Link className='favorites' to='/favorites'>Meus Filmes</Link>
    </header>
  )
}


export default  Header