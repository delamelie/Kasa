import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Collapse({ description, label }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button
        className="collapse__button"
        type="button"
        aria-controls="#collapse"
        aria-label="Déplier pour voir le contenu"
        aria-expanded="false"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="collapse__button__name" id="collapse">
          {label}
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={isOpen ? 'chevron chevron-up' : 'chevron chevron-down'}
        />
      </button>
      {isOpen && (
        <div className="collapse__text collapse__text--show">{description}</div>
      )}
    </div>
  )
}
