import "./DogForm.css"

function DogForm({ data, valid, onChange, onAdd }) {
  return (
    <fieldset>
      <legend>Vložení pejska</legend>
    <div className="dog-form">
      <input
        type="text"
        placeholder="jmeno psa"
        name="name"
        onChange={onChange}
        value={data.name}
      />
      <input
        type="text"
        placeholder="rasa psa"
        name="breed"
        onChange={onChange}
        value={data.breed}
      />
      <input
        type="number"
        placeholder="věk psa"
        name="age"
        min="0"
        max="25"
        onChange={onChange}
        value={data.age}
      />
      <button disabled={!valid} onClick={onAdd}>
        Přidat
      </button>
    </div>
    </fieldset>
  )
}

export default DogForm
