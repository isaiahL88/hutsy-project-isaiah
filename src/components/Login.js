import React from 'react'
import '../css/Login.css';

//This component is used as the entire login page for HustyConnect
const Login = () => {

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
                } else {
                    alert("error, response code: " + response.status);
                }
            });
    }
    return (
        <div>
            <h1>Sigh in to HutsyConnect</h1>
            <p class="small">Enter your details below.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="password" placeholder="Password" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login