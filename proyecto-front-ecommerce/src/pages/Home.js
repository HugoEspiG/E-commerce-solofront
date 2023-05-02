import React from 'react';
import NavBar from '../components/organisms/NavBar';
import Preseleccion from '../components/organisms/Preseleccion';



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