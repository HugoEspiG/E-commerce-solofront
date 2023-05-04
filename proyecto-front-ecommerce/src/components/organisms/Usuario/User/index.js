import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../context/UserContext';

const User = () => {
  const { userData } = useContext(UserContext)
  const navigateFn = useNavigate();
  console.log(userData)
  return (
    <>
      
    </>
  );
};
export default User;