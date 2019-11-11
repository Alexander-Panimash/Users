import React from 'react';
import './App.css';
import AddUser from "./pages/AddUser";
import {Route, Switch} from 'react-router-dom';
import UserTable from "./pages/UserTable";
import UserDetails from "./pages/UserDetails";

const App: React.FC = () => {

    return (
        <>
          <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">User table application </span>
          </nav>
            <Switch>
                <Route exact path='/' component={UserTable}/>
                <Route path='/addUser' component={AddUser}/>
                <Route path='/id' component={UserDetails}/>
            </Switch> );
        </>)
};

export default App;
