import React from 'react';
import Login from '../components/organisms/Usuario/Login';
import "../components/organisms/Preseleccion/_preseleccion.scss"
import PItem from '../components/atoms/PItem';

const login = () => {
    return (
        <div>
            <div className="prueba">
                <PItem variant={"h1"} color={"light"} className={"pt-2 pb-5"}>Bolicancha</PItem>
                <Login></Login>
            </div>
        </div>
    );
};

export default login;