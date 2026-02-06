
import RoutesApp from "./routes"
import {ToastContainer} from 'react-toastify'

function App() {

  return (
    <div className='container'>
      <ToastContainer autoClose={3000} theme='dark' />
      <RoutesApp />
    </div>
  )
}

export default App
