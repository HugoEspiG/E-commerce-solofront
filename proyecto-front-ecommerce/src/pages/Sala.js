import React from 'react';
import "../components/organisms/Preseleccion/_preseleccion.scss"
import PItem from '../components/atoms/PItem';
import SalaEspera from '../components/organisms/SalaConf/SalaEspera'

const Sala = () => {
    return (
        <div>
            <div>
                <PItem variant={"h1"} color={"light"} className={"pt-2 pb-5"}>Bolicancha</PItem>
                <SalaEspera/>
            </div>
        </div>
    );
};

export default Sala;