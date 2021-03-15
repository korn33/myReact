import './App.css';
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileComponent from "./Components/Profile/ProfileComponent";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path = '/Profile/:userId?' render={ () => <ProfileComponent />  } />
                <Route path = '/Dialogs' render={ () => <DialogsContainer />  } />
                <Route path = '/Users' render={ () => <UsersContainer />  } />
                <Route path = '/News' component = {News}/>
                <Route path = '/Music' component = {Music}/>
                <Route path = '/Settings' component = {Settings}/>
                <Route path = '/Friends' component = {Friends}/>
            </div>
        </div>
    );
}

export default App;