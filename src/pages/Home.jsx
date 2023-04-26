import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import HomepageBanner from '../assets/sea-resized.jpg'

export default function Home() {
  return (
    <div className="container">
      <Banner
        children="Chez vous, partout et ailleurs"
        picture={HomepageBanner}
      />
      <Gallery />
    </div>
  )
}
