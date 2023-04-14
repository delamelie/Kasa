import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'

function Accomodation() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`/accomodation.json`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <main className="accomodation">
      <ul>
        {data.map((accomodation) => (
          <Card key={accomodation.title} accomodation={accomodation} />
        ))}
      </ul>
    </main>
  )
}

export default Accomodation
