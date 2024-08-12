import { useEffect, useState } from "react"
import rawData from "./dogsData.json"
import PageContainer from "./components/PageContainer/PageContainer"
import DogList from "./components/DogList/DogList"
import DogForm from "./components/DogForm/DogForm"
import Toggler from "./components/Toggler/Toggler"

function App() {
  const [listOfDogs, setListOfDogs] = useState(rawData.dogs)

  const [newDog, setNewDog] = useState({
    id:
      listOfDogs.length > 0
        ? Math.max(...listOfDogs.map((dog) => dog.id)) + 1
        : 1,
    name: "",
    breed: "",
    age: "",
  })

  const [valid, setValid] = useState(false)
  const [activeTab, setActiveTab] = useState(1)

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
    let updatedDog
    const val = e.target.value

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
  // console.log(newDog)
  // }, [newDog])

  return (
    <PageContainer>
      <Toggler onChoose={handleChoose} />
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
      {activeTab === 2 && <></>}
    </PageContainer>
  )
}

export default App
