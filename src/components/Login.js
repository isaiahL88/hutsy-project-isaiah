import React from 'react'
import '../css/Login.css';
import credit from "../assets/credit.png"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';



//This component is used as the entire login page for HustyConnect
const Login = ({ setToken }) => {
    const [eyeOff, setEyeOff] = useState([]);
    const navigate = useNavigate();
    //Handles submit from the login form
    const handleSubmit = (e) => {
        e.preventDefault();
        var email = e.target.email.value;
        var password = e.target.password.value;
        //This bit of code will call make the login post request to the api 
        fetch('https://test.apihutsy.com/api/auth/native', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            //After the login request is made this bit checks if the api responded with ok status
            .then((response) => response.json())
            .then((data) => {
                console.log("THis is the loging response: ");
                console.log(data);
                setToken(data.jwt);
                //set the user's name here to be acesses for profile splitter
                //and maybe more components in the future
                sessionStorage.setItem('first', data.user.firstName);
                sessionStorage.setItem('last', data.user.lastName);

                //store the user id, needed to see which events the user attends
                sessionStorage.setItem('id', data.user.id);
                console.log(data);
            });
    }

    const handleEyeClick = () => {
        if (eyeOff === true) {
            setEyeOff(false);
        } else {
            setEyeOff(true);
        }
    }
    return (
        <div id="loginPage">
            <img id="creditImg" src={credit} />
            <div id="loginSection">
                <h1>Sigh in to HutsyConnect</h1>
                <p class="small">Enter your details below.</p>
                <form id='login-form' onSubmit={handleSubmit}>
                    <div class="login-data">
                        <input class="login-input" type="email" name="email" placeholder='Email' required />
                    </div>
                    <div class="login-data">
                        <input class="login-input" type={eyeOff ? "password" : "text"} name="password" placeholder='Password' required />

                        <svg id='eye' onClick={handleEyeClick} width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 
                            8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 
                            5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z" fill={eyeOff ? "#E1E4E6" : "#111936"} />
                        </svg>


                    </div>
                    <p id="signup-link">Don't have an account? <a href='/SignUp'>SIGN UP</a></p>

                    <input id="login-button" type="submit" value="SIGN IN" />
                </form>
            </div>
        </div>
    )
}

export default Login