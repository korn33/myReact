import './App.css';
import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path = '/Profile' component = {Profile}/>
                <Route path = '/Dialogs' component = {Dialogs}/>
                <Route path = '/News' component = {News}/>
                <Route path = '/Music' component = {Music}/>
                <Route path = '/Settings' component = {Settings}/>
            </div>
        </div>
    </BrowserRouter>
    );
}

export default App;