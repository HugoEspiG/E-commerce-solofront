import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../context/UserContext';


const User = () => {
  const { userData } = useContext(UserContext)
  const navigateFn = useNavigate();
  console.log(userData)
  return (
    <div className="container text-center">
      <div className="row ">
        <div className="col-md-6">
          <img src='https://static.vecteezy.com/system/resources/previews/003/465/919/non_2x/awesome-smoking-monkey-with-glasses-logo-mascot-vector.jpg' className='img-tam-user rounded float-start' alt=''></img>
        </div>
        <div className="col">
        </div>
        <div className="col">
        </div>
      </div>
    </div>
  );
};
export default User;