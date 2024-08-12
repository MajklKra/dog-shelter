import "./DogList.css";

function DogList({ data }) {
  return (
    <div className="list">
      {data.map((item) => {
        return (
          <div className="item" key={item.id}>
            <span>
              {item.name} / {item.breed} / {item.age}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default DogList;
