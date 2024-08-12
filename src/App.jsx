import { useState } from "react";
import rawData from "./dogsData.json";
import PageContainer from "./components/PageContainer/PageContainer";

function App() {
  const [listOfDogs, setListOfDogs] = useState(rawData.dogs);

  return (
    <PageContainer>
      <p>Odstavec1</p>
      <p>Odstavec2</p>
      <p>Odstavec3</p>
    </PageContainer>
  );
}

export default App;
