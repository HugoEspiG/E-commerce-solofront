import React, { useState, useEffect, useContext } from 'react';
import PItem from '../../../atoms/PItem';
import { useNavigate, useParams } from "react-router-dom";
import Button from '../../../atoms/button';
import { UserContext } from '../../../../context/UserContext';
import Item from '../../SalaConf/SalaEspera/ItemFold/Item';

const SalaEspera = () => {

    const { userData } = useContext(UserContext)
    const { Nsala } = useParams();
    const [sala, setSala] = useState(0);
    const navigateFn = useNavigate();
    const [users, setUsers] = useState([])
    const gameStart = () => {

        //Aca tiene que haber una peticion en donde
        // Se avise que el juego inicio
        // Para actualizar el juego

    }

    useEffect(() => {
        // async function loadUserInfo(){
        //     const resp = await getItem(id);
        //     setNsala(resp)
        // }
        // loadUserInfo();
        setSala(Nsala)
        console.log(Nsala);
    }, [Nsala])

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Aca debe ir in fetch para traer lo usuarios en la sala y guardarlos en setUsers
            //Ademas de una variable true or false si el juego inicio
        }, 5000);
        const inicio = false
        // Retornar una función de limpieza para detener el intervalo cuando el componente se desmonte
        if (inicio) {
            navigateFn(`/Game/${sala}/playing`)
        }
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="container">
            {
                Nsala === 0 ? (
                    <PItem variant={"fs-5"} color={"light"} className={"my-2 "}>No hay salas con este codigo</PItem>
                ) : (
                    <>
                        <PItem variant={"fs-1"} color={"light"} className={"my-2 "}>Numero de sala:</PItem>
                        <PItem variant={"fs-1"} color={"light"} className={"my-8 bg-primary"}>{sala}</PItem>
                        {users ?
                            users.map((cerv) =>
                                <div key={cerv.id} className="col ItemListOrder" align="center">
                                    <Item id={cerv.id} nombre={cerv.nombre}></Item>
                                </div>
                            )
                            :
                            <></>
                        }
                        {userData.esAdmin ?
                            <Button variant={"primary"} size={"lg"} onClick={gameStart} className={"m-4 add-shadow position-absolute bottom-0 end-0"}>Empezar</Button>
                            :
                            <></>
                        }

                    </>
                )

            }

        </div>
    );
};

export default SalaEspera;