import { useEffect, useState } from "react"
import rawData from "./dogsData.json"
import PageContainer from "./components/PageContainer/PageContainer"
import DogList from "./components/DogList/DogList"
import DogForm from "./components/DogForm/DogForm"
import Toggler from "./components/Toggler/Toggler"
import ShelterForm from "./components/ShelterForm/ShelterForm"

function App() {
  const [listOfDogs, setListOfDogs] = useState(rawData.dogs)
  const [newDog, setNewDog] = useState({
    id:
      listOfDogs.length > 0
        ? Math.max(...listOfDogs.map((dog) => dog.id)) + 1
        : 1,
    // Math.max(15, 18, 55, -5)
    // Math.max(listOfDogs.map((dog) => dog.id))
    // => Math.max([1,2,3,4,5,6])
    // Math.max(...listOfDogs.map((dog) => dog.id))
    // => Math.max(1,2,3,4,5,6)
    name: "",
    breed: "",
    age: "",
  })
  const [valid, setValid] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
  const [shelterStorage, setShelterStorage] = useState({
    food: 35,
    vaccine: 15,
    pills: 20,
  })
  const dogRequirements = {
    food: 5,
    vaccine: 1,
    pills: 2,
  }

  const validateData = (dog) => {
    if (dog.age === "" || parseInt(dog.age) < 0 || parseInt(dog.age) > 25) {
      setValid(false)
    } else if (dog.name.trim().length === 0 || dog.breed.trim().length === 0) {
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const handleChange = (e) => {
    const source = e.target.name
    const val = e.target.value
    let updatedDog
    switch (source) {
      case "name": {
        updatedDog = { ...newDog, name: val }
        break
      }
      case "breed": {
        updatedDog = { ...newDog, breed: val }
        break
      }
      case "age": {
        updatedDog = { ...newDog, age: val }
        break
      }
      default:
        break
    }
    setNewDog(updatedDog)
    validateData(updatedDog)
  }

  const handleAdd = () => {
    const totalRequirements = {
      food: (listOfDogs.length + 1) * dogRequirements.food,
      vaccine: (listOfDogs.length + 1) * dogRequirements.vaccine,
      pills: (listOfDogs.length + 1) * dogRequirements.pills,
    }
    if (
      totalRequirements.food <= shelterStorage.food &&
      totalRequirements.vaccine <= shelterStorage.vaccine &&
      totalRequirements.pills <= shelterStorage.pills
    ) {
      setListOfDogs((listOfDogs) => {
        return [...listOfDogs, newDog]
      })
      const updatedDog = {
        id: newDog.id + 1,
        name: "",
        breed: "",
        age: "",
      }
      setNewDog(updatedDog)
      validateData(updatedDog)
    } else {
      alert("nedostatek zásob pro přidání nového psa")
    }
  }

  const handleDelete = (idToDel) => {
    const temp = listOfDogs.filter((dog) => dog.id !== idToDel)
    setListOfDogs(temp)
  }

  const handleChoose = (name) => {
    switch (name) {
      case "list-of-dogs": {
        setActiveTab(1)
        break
      }
      case "shelter-storage": {
        setActiveTab(2)
        break
      }
      default:
        break
    }
  }
  // useEffect(() => {
  //   console.log(newDog)
  // }, [newDog])

  const handleAddToStorage = (temp) => {
    const temporaryStorage = {
      food: shelterStorage.food + temp.food,
      vaccine: shelterStorage.vaccine + temp.vaccine,
      pills: shelterStorage.pills + temp.pills,
    }
    setShelterStorage(temporaryStorage)
  }

  return (
    <PageContainer>
      <Toggler onChoose={handleChoose} active={activeTab} />
      {activeTab === 1 && (
        <>
          <DogList data={listOfDogs} onDelete={handleDelete} />
          <DogForm
            valid={valid}
            onChange={handleChange}
            onAdd={handleAdd}
            data={newDog}
          />
        </>
      )}
      {activeTab === 2 && (
        <>
          <h3>Aktuální zásoby</h3>
          <p>granule: {shelterStorage.food} kg</p>
          <p>vakcíny: {shelterStorage.vaccine} ks</p>
          <p>medikamenty: {shelterStorage.pills} ks</p>
          <ShelterForm onAdd={handleAddToStorage} />
        </>
      )}
    </PageContainer>
  )
}

export default App
