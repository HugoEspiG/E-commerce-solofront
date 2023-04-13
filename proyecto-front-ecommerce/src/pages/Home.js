import React from 'react';
import NavBar from '../components/NavBar';
import Login from '../components/Usuario/Login';

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="row g-0">
                <div className="col-sm-6 col-md-7">
                    <Login></Login>
                </div>
                <div className="col-6 col-md-4 border border-dark border border-2 rounded">
                    <h1>Logueate</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;