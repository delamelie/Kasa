import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'

export default function Accomodation() {
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`/accomodation.json`)
      .then((response) => response.json())
      // .then((response) => {
      //   if (!response.ok) {
      //     throw new Error('Error occured')
      //     //throw new Error(response.status)
      //   }
      //   return response.json()
      // })
      .then((data) =>
        setData(data.find((accomodation) => accomodation.id === id))
      )
      .catch((error) => console.log(error))
  }, [id])

  return (
    <React.Fragment>
      <img src={data.cover} className="accomodation__photo" alt={data.title} />
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
          <div className="accomodation__heading__host__rating">
            <Rating data={data} />
          </div>
        </div>
      </section>
      <section className="accomodation__specs">
        <div className="accomodation__specs__description">
          <Collapse data={data} />
        </div>
        <div className="accomodation__specs__equipments">
          <ul>
            {data.equipments &&
              data.equipments.map((equipment, index) => {
                return <li key={index}>{equipment}</li>
              })}
          </ul>
        </div>
      </section>
    </React.Fragment>
  )
}
