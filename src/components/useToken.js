// Custom hook to save user token to sessionStorage
import { useState } from 'react';

export default function useToken() {
    //This simply checks the session storage for the token
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.jwt
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
        setToken(userToken.jwt);
    };

    return {
        setToken: saveToken,
        token
    }
}