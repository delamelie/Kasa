import React from 'react'
import Banner from '../components/Banner'
import AccomodationSection from '../components/AccomodationSection'
import HomepageBanner from '../assets/sea-resized.jpg'

export default function Home() {
  return (
    <React.Fragment>
      <Banner
        children="Chez vous, partout et ailleurs"
        picture={HomepageBanner}
      />
      <AccomodationSection />
    </React.Fragment>
  )
}
