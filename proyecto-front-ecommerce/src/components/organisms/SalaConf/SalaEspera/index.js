import React, { useState , useEffect} from 'react';
import PItem from '../../../atoms/PItem';
import { useParams } from "react-router-dom";

const SalaEspera = (props) => {

    
    const{id} = useParams();
    const[Nsala,setNsala]=useState(0);

    useEffect(()=>{
        // async function loadUserInfo(){
        //     const resp = await getItem(id);
        //     setNsala(resp)
        // }
        // loadUserInfo();
        setNsala(1234)
    },[id])


    return (
        <div className="container">
            {
                Nsala===0?(
                    <PItem variant={"fs-5"} color={"light"} className={"my-2 "}>No hay salas con este codigo</PItem>
                ):(
                    <>
                    <PItem variant={"fs-1"} color={"light"} className={"my-2 "}>Numero de sala:</PItem>
                    <PItem variant={"fs-1"} color={"light"} className={"my-2 bg-primary"}>{Nsala}</PItem>
                    </>
                )

            }

        </div>
    );
};

export default SalaEspera;