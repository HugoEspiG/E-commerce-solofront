import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Preseleccion.scss"
import Button from '../../atoms/button';

const Preseleccion = () => {
    const navigateFn = useNavigate();

    const IngSala = () => {
        navigateFn('/Login')
    }

    const IngCrerSala = () => {
        navigateFn('/LogSala')
    }

    return (
            <div className="btn-custom">
                <Button variant={"primary"} size={"lg"} className={""} onClick={IngCrerSala}>Crear Sala</Button>
                <Button variant={"primary"} size={"lg"} className={""} onClick={IngSala}>Unirse Sala</Button>
            </div>
    );
};

export default Preseleccion;