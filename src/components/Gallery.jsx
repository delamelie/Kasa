import { useState, useEffect } from 'react'
import Thumb from './Thumb'

export default function Gallery() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`/accomodation.json`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <main className="accomodation">
      <ul className="accomodation__list">
        {data.map((accomodation) => (
          <Thumb key={accomodation.id} accomodation={accomodation} />
        ))}
      </ul>
    </main>
  )
}
