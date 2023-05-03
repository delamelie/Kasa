import Thumb from './Thumb'
import { useLoaderData } from 'react-router-dom'

export default function Gallery() {
  const accomodations = useLoaderData()
  return (
    <main className="gallery">
      <ul className="gallery__items">
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
