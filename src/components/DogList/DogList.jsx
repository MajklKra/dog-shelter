import "./DogList.css"

function DogList({ data, onDelete }) {
  return (
      <div id="d1">
        <h1>SEZNAM PEJSKŮ</h1>
        <p id="popis"> Jméno/rasa/věk</p>
      <div className="list">
        {data.map((item) => {
          return (
            <div className="item" key={item.id}>
              <span>
                {item.name} / {item.breed} / {item.age}
              </span>
              <button className="btn-delete" onClick={() => onDelete(item.id)}>
                X
              </button>
            </div>
          )
        })}
      </div>
      </div> 

  )
}

export default DogList
