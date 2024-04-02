//@ts-nocheck
import React, { useEffect, useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, selectUser } from '../../redux/slices/users';

const Login = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const responseMessage = (response): void => {
    const { given_name, family_name, email, name, picture, jti } = jwtDecode(response.credential);
    dispatch(addUser({ given_name, family_name, email, picture }));

    const myUserEntity = {
      jti: jti,
      Name: name,
    };

    sessionStorage.setItem('userEntity', JSON.stringify(myUserEntity));
  };

  const errorMessage = (error: any): void => {
    console.log(error);
  };

  return (
    <div className="App">
      {user.given_name !== '' &&
        <Navigate to="/chat" replace={true} />
      }
      <div>
        <h2>React Google Login</h2>
        <br />
        <br />
        <GoogleLogin onSuccess={responseMessage} onError={(error) => errorMessage(error)} />
      </div>
    </div>
  );
}

export default Login;
