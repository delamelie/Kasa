import { useState, React } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Collapsible({ children, label }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={() => setIsOpen(!isOpen)}>
        <div className="collapse__button__name">{label}</div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={isOpen ? 'chevron chevron-up' : 'chevron chevron-down'}
        />
      </button>
      {/* <div className={isOpen ? 'collapse__text show' : 'collapse__text'}>
        {children}
      </div> */}
      <div>
        {isOpen && <div className="collapse__text show">{children}</div>}
      </div>
    </div>
  )
}
