export default function Banner({ children, picture }) {
  return (
    <div className="banner">
      <img className="banner__picture" src={picture} alt="Bannière" />
      <h1 className="banner__tagline">{children}</h1>
    </div>
  )
}
