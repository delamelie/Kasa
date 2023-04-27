import { useState, useEffect } from 'react'
import Thumb from './Thumb'
import { useLoaderData } from 'react-router-dom'

/// Méthode fetch

// export default function Gallery() {
//   const [data, setData] = useState([])

//   useEffect(() => {
//     fetch(`/accomodation.json`)
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.log(error))
//   }, [])

//   return (
//     <main className="accomodation">
//       <ul className="accomodation__list">
//         {data.map((accomodation) => (
//           <Thumb key={accomodation.id} accomodation={accomodation} />
//         ))}
//       </ul>
//     </main>
//   )
// }

/// Méthode loader

export default function Gallery() {
  const accomodations = useLoaderData()
  return (
    <main className="gallery">
      <ul className="gallery__item">
        {accomodations.map((accomodation) => (
          <Thumb key={accomodation.id} accomodation={accomodation} />
        ))}
      </ul>
    </main>
  )
}

export const accomodationsLoader = async () => {
  const response = await fetch(`/accomodation.json`)
  return response.json()
}
