import React from 'react';
import NavBar from '../components/NavBar';
import ItemListContainer from '../components/SalaConf/SalaDeEspera/ItemFold/ItemListContainer';



const Home = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <div>
                <ItemListContainer />
            </div>
        </div>
    );
};

export default Home;