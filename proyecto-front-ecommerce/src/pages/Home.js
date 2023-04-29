import React from 'react';
import NavBar from '../components/NavBar';
import Preseleccion from '../components/Preseleccion';



const Home = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <div>
                <p>Bolicancha</p>
                <Preseleccion/>
            </div>
        </div>
    );
};

export default Home;