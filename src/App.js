import './App.css';
import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;