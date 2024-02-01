import Search from "./components/Search"
import { useState } from "react";
import Foodlist from "./components/Foodlist"
import Navbar from "./components/Navbar"
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import Fooddetails from "./components/Fooddetails";
import "./App.css"
function App() {
        const [foodData,setfoodData]=useState([]);
        const [foodId, setfoodid]=useState("656329");
  return <div>
          <Navbar></Navbar>
          <Search foodData={foodData} setfoodData={setfoodData}></Search>
          <Container>
            <InnerContainer>
            <Foodlist setfoodid={setfoodid} foodData={foodData}></Foodlist>
            </InnerContainer>
            <InnerContainer>
              <Fooddetails foodId={foodId}></Fooddetails>
            </InnerContainer>
          </Container>
    </div>
}

export default App
