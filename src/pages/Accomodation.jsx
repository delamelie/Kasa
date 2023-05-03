import { useParams, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Carousel from '../components/Carousel'
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'

export default function Accomodation() {
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`/accomodation.json`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setData(data.find((accomodation) => accomodation.id === id))
      })
      .catch((error) => console.log(error))
  }, [id])

  if (!data) {
    return (
      <div>
        <Navigate to="/404" replace={true} />
      </div>
    )
  }

  return (
    <div className="container">
      <Carousel data={data} />
      <section className="accomodation__heading">
        <div className="accomodation__heading__main">
          <h1 className="accomodation__heading__main__title">{data.title}</h1>
          <h2 className="accomodation__heading__main__location">
            {data.location}
          </h2>
          <ul className="accomodation__heading__main__tags">
            {data.tags &&
              data.tags.map((tag, index) => <Tag key={index} tag={tag} />)}
          </ul>
        </div>

        <div className="accomodation__heading__host">
          <div className="accomodation__heading__host__rating">
            <Rating rating={data.rating} />
          </div>
          <div className="accomodation__heading__host__profile">
            <div className="accomodation__heading__host__profile__name">
              {data && data.host && data.host.name}
            </div>
            <img
              src={data && data.host && data.host.picture}
              className="accomodation__heading__host__profile__photo"
              alt={data && data.host && data.host.name}
            />
          </div>
        </div>
      </section>
      <section className="accomodation__specs">
        <Collapse
          className="accomodation__specs__description"
          label="Description"
          children={data.description}
        />

        <Collapse
          label="Équipements"
          children={
            data.equipments &&
            data.equipments.map((equipment, index) => {
              return (
                <div
                  className="accomodation__specs__equipments__items"
                  key={index}
                >
                  {equipment}
                </div>
              )
            })
          }
        />
      </section>
    </div>
  )
}
