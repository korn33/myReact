import './App.css';
import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path = '/Profile' render={ () => <Profile store={props.store}/>  } />
                <Route path = '/Dialogs' render={ () => <DialogsContainer store={props.store}/>  } />
                <Route path = '/News' component = {News}/>
                <Route path = '/Music' component = {Music}/>
                <Route path = '/Settings' component = {Settings}/>
                <Route path = '/Friends' component = {Friends}/>
            </div>
        </div>
    </BrowserRouter>
    );
}

export default App;