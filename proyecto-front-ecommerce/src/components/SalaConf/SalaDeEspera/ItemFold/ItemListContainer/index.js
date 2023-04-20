import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react';
import { getDatos } from "../../../../../api/getDatos";
import ItemList from '../ItemList'


const ItemListContainer = () => {
    const { Nsala } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadData() {
            const resp = await getDatos.getUsers(Nsala);
            setData(resp);
            setLoading(false);
        }
        loadData();
    }, [Nsala])

    return (
    <div className="container">
        {
            loading?<h2>Cargando...</h2>:
            <ItemList data={data}/>
        }
    </div>
    );

};

export default ItemListContainer;