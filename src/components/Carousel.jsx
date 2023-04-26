import { useState, React } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default function Carousel({ data }) {
  const [index, setIndex] = useState(0)
  const picturesLength = data.pictures && data.pictures.length

  function handlePrevious() {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? picturesLength - 1 : newIndex)
  }

  function handleNext() {
    const newIndex = index + 1
    setIndex(newIndex >= picturesLength ? 0 : newIndex)
  }

  return (
    <ul className="carousel" aria-label="carousel">
      <li className="carousel__item">
        <button
          type="button"
          className="carousel__button button__previous"
          onClick={handlePrevious}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="chevron chevron__left"
          />
        </button>

        <img
          src={data.pictures && data.pictures[index]}
          className="carousel__image"
          alt="{data.title}"
        />

        <button
          type="button"
          className="carousel__button button__next"
          onClick={handleNext}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="chevron chevron__right"
          />
        </button>
      </li>
    </ul>
  )
}
