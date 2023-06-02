import React from 'react';
import Button from '../../atoms/button';
import { useNavigate } from 'react-router-dom';

//EN ESTE COMPONENTE VA EL Juego
const Game = () => {
    const navigateFn= useNavigate()

    const exit = ()=>{
        navigateFn("/")
    }
    return (
        <div>
            <Button variant={"primary"} size={"lg"} onClick={exit} className={"m-4 add-shadow position-absolute top-0 end-0 bi bi-x-square-fill"}> </Button>
        </div>
    );
};

export default Game;