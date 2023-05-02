import React from 'react';
import NavBar from '../components/organisms/NavBar';
import Login from '../components/organisms/Usuario/Login';

const login = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="container">
                <Login></Login>
            </div>
        </div>    
        );
};

export default login;