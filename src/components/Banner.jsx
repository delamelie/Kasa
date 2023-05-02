export default function Banner({ children, picture, variant }) {
  const className = `banner banner--${variant}`
  return (
    <div className={className}>
      <img className="banner__picture" src={picture} alt="Bannière" />
      <h1 className="banner__tagline">{children}</h1>
    </div>
  )
}
