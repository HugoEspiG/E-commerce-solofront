import React from 'react';
import Preseleccion from '../components/organisms/Preseleccion';
import PItem from '../components/atoms/PItem';
import "../components/organisms/Preseleccion/_preseleccion.scss"


const Home = () => {
    return (
        <div>
            <div className='prueba'>
                <PItem  variant={"h1"} color={"light"} className={"mt-2 mb-5"}>Bolicancha</PItem>
                <Preseleccion/>
            </div>
        </div>
    );
};

export default Home;