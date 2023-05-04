import React from 'react';
import Registro from '../components/organisms/Usuario/Register';
import "../components/organisms/Preseleccion/_preseleccion.scss"
import PItem from '../components/atoms/PItem';

const Register = () => {
    return (
        <div>
            <div className="prueba">
                <PItem variant={"h1"} color={"light"} className={"pt-2 pb-5"}>Bolicancha</PItem>
                <Registro></Registro>
            </div>
        </div>
    );
};

export default Register;