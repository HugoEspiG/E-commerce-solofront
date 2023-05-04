import React from 'react';
import { useNavigate } from "react-router-dom";
import "./_preseleccion.scss"
import Button from '../../atoms/button';

const Preseleccion = () => {
    const navigateFn = useNavigate();

    const IngSala = () => {
        navigateFn('/LogSala')
    }

    const IngCrerSala = () => {
        navigateFn('/Login')
    }

    return (
        <div className="custom">
            <Button variant={"custom"} size={"lg"} className={""} onClick={IngCrerSala}>
                <span className="create">Crear</span>
                <span className="room"> sala</span>
            </Button>
            <Button variant={"custom"} size={"lg"} className={""} onClick={IngSala}>
                <span className="create">Unirse</span>
                <span className="room"> sala</span>
            </Button>
        </div>
    );
};

export default Preseleccion;