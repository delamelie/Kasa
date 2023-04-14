import { Link } from 'react-router-dom'

function Card({ accomodation }) {
  console.log(accomodation)
  return (
    <Link to={`/logement/${accomodation.id}`}>
      <li className="accomodation__card">
        <img
          src={accomodation.pictures[0]}
          className="accomodation__card__photo"
          alt={accomodation.title}
        />
        <span className="accomodation__card__name">{accomodation.title}</span>
      </li>
    </Link>
  )
}

export default Card
