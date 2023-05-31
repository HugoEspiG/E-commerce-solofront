import React, { useState , useEffect, useContext} from 'react';
import PItem from '../../../atoms/PItem';
import { useParams } from "react-router-dom";
import { UserContext } from '../../../../context/UserContext';

const SalaEspera = () => {

    const {sala} = useContext(UserContext)
    const{id} = useParams();
    const[Nsala,setNsala]=useState(0);

    useEffect(()=>{
        // async function loadUserInfo(){
        //     const resp = await getItem(id);
        //     setNsala(resp)
        // }
        // loadUserInfo();
        setNsala(sala)
    },[id])


    return (
        <div className="container">
            {
                Nsala===0?(
                    <PItem variant={"fs-5"} color={"light"} className={"my-2 "}>No hay salas con este codigo</PItem>
                ):(
                    <>
                    <PItem variant={"fs-1"} color={"light"} className={"my-2 "}>Numero de sala:</PItem>
                    <PItem variant={"fs-1"} color={"light"} className={"my-8 bg-primary"}>{Nsala}</PItem>
                    </>
                )

            }

        </div>
    );
};

export default SalaEspera;