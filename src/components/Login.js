import React from 'react'
import '../css/Login.css';
import credit from "../assets/credit.png"
import { useNavigate } from "react-router-dom";


//This component is used as the entire login page for HustyConnect
const Login = () => {
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
            .then((response) => {
                if (response.status === 200) {
                    // TODO:Should move onto events page 
                    alert("Successful Login");
                    //This just navigates user to the events page
                    navigate("/events");
                } else {
                    alert("error, response code: " + response.status);
                }
            });
    }
    return (
        <div id="loginPage">
            <img id="creditImg" src={credit} />
            <div id="loginSection">
                <h1>Sigh in to HutsyConnect</h1>
                <p class="small">Enter your details below.</p>
                <form onSubmit={handleSubmit}>
                    <div class="login-data">
                        <input class="login-input" type="email" name="email" placeholder='Email' required />
                    </div>
                    <div class="login-data">
                        <input class="login-input" type="password" name="password" placeholder='Password' required />
                    </div>

                    <input id="login-button" type="submit" value="SIGN IN" />
                </form>
            </div>
        </div>
    )
}

export default Login