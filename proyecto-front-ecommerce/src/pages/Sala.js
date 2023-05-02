import React from 'react';
import NavBar from '../components/organisms/NavBar';
import ItemListContainer from '../components/organisms/SalaConf/SalaDeEspera/ItemFold/ItemListContainer';



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