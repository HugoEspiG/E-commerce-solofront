import React from 'react';
import NavBar from '../components/NavBar';
import Gamelog from '../components/SalaConf/Gamelog';


const LoginGame = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <div>
                <Gamelog />
            </div>
        </div>
    );
};

export default LoginGame;