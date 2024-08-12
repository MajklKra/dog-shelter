import "./DogForm.css"

function DogForm() {
  return (
    <div className="dog-form">
      <input type="text" placeholder="jmeno psa" name="name" />

      <input type="text" placeholder="rasa psa" name="breed" />

      <input type="number" placeholder="věk psa" name="age" min="0" max="25" />

      <button>Přidat</button>
    </div>
  )
}

export default DogForm
