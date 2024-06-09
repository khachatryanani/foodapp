import { useState } from "react";
import Search from "./components/search.jsx";
import FoodList from "./components/foodList.jsx";
import Nav from "./components/nav.jsx";
import "./App.css";
import Container from "./components/container.jsx";
import InnerContainer from "./components/innerContainer.jsx";
import FoodDetail from "./components/foodDetail.jsx";
function App() {
  const [foodData, setData] = useState([]);
  const [foodId, setFoodId] = useState("680975");

  return (
    <>
      <Nav />
      <Search foodData={foodData} setData={setData}></Search>
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId}></FoodList>
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
