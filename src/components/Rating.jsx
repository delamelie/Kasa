import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Rating({ rating }) {
  const starsArray = [...Array(5).keys()]

  const stars = starsArray.map((index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className={rating >= index ? 'plain-star' : 'empty-star'}
    />
  ))
  return <div className="rating">{stars}</div>
}
