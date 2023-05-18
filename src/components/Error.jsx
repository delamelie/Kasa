import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Oups ! La page que vous demandez n'existe pas</h2>
      <Link to="/">
        <div>Retourner sur la page d'accueil</div>
      </Link>
    </div>
  )
}
