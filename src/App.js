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
import Friends from "./Components/Friends/Friends";

function App(props) {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path = '/Profile' render={ () => <Profile state={props.state.profilePage}
                                                                 dispatch={props.dispatch}
                                                        />
                                                }
                />
                <Route path = '/Dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/> }/>
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