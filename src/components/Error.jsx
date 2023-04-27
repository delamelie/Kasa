import { Link } from 'react-router-dom'
import { useRouteError } from 'react-router-dom'

function ErrorMessage() {
  let error = useRouteError()
  console.error(error)
  return (
    <div className="error">
      <h1>404</h1>
      <p>{error.message}</p>
      <h2>Oups ! La page que vous demandez n'existe pas</h2>
      <Link to="/">
        <div>Retour sur la page d'accueil</div>
      </Link>
    </div>
  )
}

export default ErrorMessage
