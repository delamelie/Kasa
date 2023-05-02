import Banner from '../components/Banner'
import AboutBanner from '../assets/mountains.jpg'
import Collapse from '../components/Collapse'

export default function About() {
  return (
    <div className="container about__container">
      <Banner picture={AboutBanner} variant="secondary" />
      <section className="policy">
        <Collapse
          label="Fiabilité"
          children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          variant="secondary"
        />

        <Collapse
          label="Respect"
          children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          variant="secondary"
        />

        <Collapse
          label="Service"
          children="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          variant="secondary"
        />

        <Collapse
          label="Sécurité"
          children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          variant="secondary"
        />
      </section>
    </div>
  )
}
