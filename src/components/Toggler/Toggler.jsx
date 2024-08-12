import "./Toggler.css"

function Toggler({ onChoose }) {
  const handleClick = (e) => {
    onChoose(e.target.name)
  }

  return (
    <div className="page-toggler">
      <button className="toggler-btn" name="list-of-dogs" onClick={handleClick}>
        Seznam psů
      </button>

      <button
        className="toggler-btn"
        name="shelter-storage"
        onClick={handleClick}
      >
        Sklad útulku
      </button>
    </div>
  )
}

export default Toggler
