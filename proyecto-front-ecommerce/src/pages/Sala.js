import React from 'react';
import ItemListContainer from '../components/organisms/Usuario/User/ItemFold/ItemListContainer';
import "../components/organisms/Preseleccion/_preseleccion.scss"
import PItem from '../components/atoms/PItem';


const Home = () => {
    return (
        <div>
            <div>
                <PItem variant={"h1"} color={"light"} className={"pt-2 pb-5"}>Bolicancha</PItem>
                <ItemListContainer />
            </div>
        </div>
    );
};

export default Home;