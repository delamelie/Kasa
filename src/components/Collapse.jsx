export default function Collapse({ data }) {
  return (
    <div className="collapse">
      <div className="collapse__title">Description</div>
      <div className="collapse__text">{data.description}</div>
    </div>
  )
}
