import "./Toggler.css"

function Toggler({ onChoose, active }) {
  const handleClick = (e) => {
    onChoose(e.target.name)
  }

  return (
    <div className="page-toggler">
      <button
        className={`toggler-btn ${active === 1 ? "active" : ""}`}
        name="list-of-dogs"
        onClick={handleClick}
      >
        Seznam psů
      </button>

      <button
        className={`toggler-btn ${active === 2 ? "active" : ""}`}
        name="shelter-storage"
        onClick={handleClick}
      >
        Sklad útulku
      </button>
    </div>
  )
}

export default Toggler
