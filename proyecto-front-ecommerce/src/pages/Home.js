import React from 'react';
import NavBar from '../components/NavBar';
import Gamelog from '../components/SalaConf/Gamelog';


const Home = () => {
    return (
        <div>
            <NavBar />
            <div>
                <Gamelog />
            </div>
        </div>
    );
};

export default Home;