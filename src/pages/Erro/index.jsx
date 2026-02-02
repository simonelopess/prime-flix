import { Link } from "react-router-dom"
import "./Error.css"

function Erro404() {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <p>A página que você está procurando não existe.</p>
            <Link to='/'>Voltar para a página inicial</Link>
        </div>
    )
}

export default Erro404