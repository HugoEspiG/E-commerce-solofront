import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../context/UserContext';
import ItemList from './ItemFold/ItemList';
import { getDatos } from '../../../../api/getDatos';

const User = () => {
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
  const { userData } = useContext(UserContext)

  return (
    <div className="container text-center">
      {
        loading ? <h2>Cargando...</h2> :
          <div className="row align-items-center">
            <div className="col-3">
              <img src='https://static.vecteezy.com/system/resources/previews/003/465/919/non_2x/awesome-smoking-monkey-with-glasses-logo-mascot-vector.jpg' className='img-tam-user rounded float-start' alt=''></img>
            </div>
            <div className="col-8">
              <ItemList></ItemList>
            </div>
          </div>
      }
    </div>
  );
};
export default User;