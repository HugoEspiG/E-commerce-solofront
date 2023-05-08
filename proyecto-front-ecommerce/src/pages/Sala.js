import React from 'react';
import ItemList from '../components/organisms/Usuario/User/ItemFold/ItemList';
import "../components/organisms/Preseleccion/_preseleccion.scss"
import PItem from '../components/atoms/PItem';


const Home = () => {
    return (
        <div>
            <div>
                <PItem variant={"h1"} color={"light"} className={"pt-2 pb-5"}>Bolicancha</PItem>
                <ItemList/>
            </div>
        </div>
    );
};

export default Home;