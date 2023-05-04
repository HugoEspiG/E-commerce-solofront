import React from 'react';
import Gamelog from '../components/organisms/SalaConf/Gamelog';
import "../components/organisms/Preseleccion/_preseleccion.scss"
import PItem from '../components/atoms/PItem';

const LoginGame = () => {
    return (
        <div>
            <div className='prueba'>
                <PItem variant={"h1"} color={"light"} className={"pt-2 pb-5"}>Bolicancha</PItem>
                <Gamelog />
            </div>
        </div>
    );
};

export default LoginGame;