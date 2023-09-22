// Custom hook to save user token to sessionStorage
import { useState } from 'react';

export default function useToken() {
    //This simply checks the session storage for the token
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');

        //Originally used this, but it was causing errors, and i didn't get the point
        //of change back and forth from json, although it might be important
        // console.log("stored: ");
        // console.log(userToken);
        // return userToken?.jwt;

        return tokenString;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        // Saves the passed json object into session storage
        // note: the the actual token is under jwt attribute
        // note: because it is a sessionstorage item it must be
        //       stored as a string.
        sessionStorage.setItem('token', userToken);
        //This line gets the jwt as specified in the api
        console.log(userToken);
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}