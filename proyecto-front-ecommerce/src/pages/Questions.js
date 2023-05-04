import React from 'react';
import "../components/organisms/Preseleccion/_preseleccion.scss"
import PItem from '../components/atoms/PItem';
import Preguntas from '../components/organisms/Usuario/Preguntas';

const Questions = () => {
    return (
        <div>
            <div className="prueba">
                <PItem variant={"h1"} color={"light"} className={"pt-2 pb-5"}>Bolicancha</PItem>
                <Preguntas></Preguntas>
            </div>
        </div>
    );
};

export default Questions;