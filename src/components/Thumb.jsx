import { Link } from 'react-router-dom'

export default function Thumb({ accomodation }) {
  return (
    <Link to={`/logement/${accomodation.id}`}>
      <li className="accomodation__card">
        <img
          src={accomodation.cover}
          className="accomodation__card__photo"
          alt={accomodation.title}
        />
        <span className="accomodation__card__name">{accomodation.title}</span>
      </li>
    </Link>
  )
}
