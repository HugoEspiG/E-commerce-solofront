import React from 'react';
import NavBar from '../components/organisms/NavBar';
import Preseleccion from '../components/organisms/Preseleccion';
import PItem from '../components/atoms/PItem';



const Home = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <div>
                <PItem  variant={"h1"} color={"light"} className={""}>Bolicancha</PItem>
                <Preseleccion/>
            </div>
        </div>
    );
};

export default Home;