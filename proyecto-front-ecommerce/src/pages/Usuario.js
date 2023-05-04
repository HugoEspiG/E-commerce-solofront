import React from 'react';
import "../components/organisms/Preseleccion/_preseleccion.scss"
import PItem from '../components/atoms/PItem';
import User from '../components/organisms/Usuario/User';

const Usuario = () => {
    return (
        <div>
            <div className="prueba">
                <PItem variant={"h1"} color={"light"} className={"pt-2 pb-5"}>Bolicancha</PItem>
                <User></User>
            </div>
        </div>
    );
};

export default Usuario;