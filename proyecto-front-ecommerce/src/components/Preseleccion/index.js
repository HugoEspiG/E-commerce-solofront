import React from 'react';
import { useNavigate } from "react-router-dom";

const Preseleccion = () => {
    const navigateFn = useNavigate();

    const IngSala = () => {
        navigateFn('/Login')
    }

    const IngCrerSala = () => {
        navigateFn('/LogSala')
    }

    return (
            <div className="d-grid gap-2 d-md-block">
                <button className="btn-btd-primary" onClick={IngCrerSala}>Crear Sala</button>
                <button className="btn-btd-primary" onClick={IngSala}>Unirse Sala</button>
            </div>
    );
};

export default Preseleccion;