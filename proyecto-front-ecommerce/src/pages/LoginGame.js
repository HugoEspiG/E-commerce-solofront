import React from 'react';
import NavBar from '../components/organisms/NavBar';
import Gamelog from '../components/organisms/SalaConf/Gamelog';


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