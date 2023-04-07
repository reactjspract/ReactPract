import "./App.css";
import React from "react";
// import Navbar from "./components/header/Navbar";
// import Hero from "./components/header/Hero.js";
// import Card from "./components/header/Card";
// import PropsPract from "./components/header/PropsPract";
// import Contact from "./components/header/Contact";
// import MapPract from "./components/header/MapPract";
// import MainMeme from "./components/memeGenerator/MainMeme";
// import StatePract from "./components/memeGenerator/StatePract";
// import UserContact from "./components/header/UserContact";
// import AddItem from "./components/header/AddItem";
// import { PropsHeader } from "./components/propsPract/PropsHeader";
import MemeHeader from "./components/memeGenerator/MemeHeader";
import Boxes from "./components/propsPract/Boxes";

function App() {
  return (
    <div className="App">
      <MemeHeader />
      {/* <Navbar />
       <Hero />
      <Card
        rating="5.0"
        reviewCount={6}
        country="India"
        title="Learn React with kalyani"
        price={99}
      />
      
      <br />
      <PropsPract />
      <br />
      <Contact
        name="Vimayaka"
        phone="9014951234"
        email="vinayaka01@gmail.com"
      />
      <br />
      <MapPract /> */}
      <br />
      {/* <MainMeme />
      <br />
      <StatePract />
      <br />
      <UserContact />
      <br />
      <br />
      <AddItem /> */}
      {/* <PropsHeader /> */}
      <Boxes darkMod={true} />
    </div>
  );
}

export default App;
