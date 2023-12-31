import React, { useState } from 'react';
import credit from "../assets/credit.png";
import "../css/SignUp.css"
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();

    //keep track of input for validation purposese
    const [input, setInput] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    //A state object used to hold any error messages needed
    const [error, setError] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    //called when any input is cahbnged so the state can be updated
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        handleValidation(e);
    }

    //This funciton validates the input
    //
    //It uses the 'name' passed from the target in the e.target
    //to know which input is being validated
    //Then it uses the passed 'value' to validate
    //
    //Also uses the 'input' state to compare other input when need
    //for example, with password and confirm password
    const handleValidation = (e) => {
        e.preventDefault();
        let { name, value } = e.target;
        setError(prev => {
            const errState = { ...prev, [name]: "" };
            //find which input is being validated
            switch (name) {
                case 'firstname':
                    if (!value) {
                        errState[name] = "Please enter your First Name.";
                    }
                    break;
                case 'lastname':
                    if (!value) {
                        errState[name] = "Please enter your Last Name.";
                    }
                    break;
                case 'email':
                    if (!value) {
                        errState[name] = "Please enter an email.";
                    }
                    break;
                case 'password':
                    console.log('pass validation');
                    if (!value) {
                        errState[name] = "Please enter a password."
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        //Note the error goes to confrim password, not to password
                        errState['confirmPassword'] = "Password and Confirm Password does not match.";
                    } else {
                        errState['confirmPassword'] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;
                case 'confirmPassword':
                    if (!value) {
                        errState[name] = "Please enter Confirm Password.";
                    } else if (input.password && value !== input.password) {
                        errState[name] = "Password and Confirm Password do not match.";
                    }
                    break;
                default:
                    break;
            }
            return errState;
        }
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //just puts target vars into easy names
        let { firstname, lastname, email, password } = e.target;
        //This bit of code will make a sign up request to the api
        //Note: added a proxy due to cors errors in deployment
        const url = 'https://corsproxy.io/?' + encodeURIComponent('https://test.apihutsy.com/api/auth/user');
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                'firstName': firstname.value,
                'lastName': lastname.value,
                'email': email.value,
                'password': password.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'accept': 'application/json'
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    alert('Succesfully created account');
                    navigate('/');
                } else {
                    alert('Problem creating account!');
                }
            })
    }


    return (
        <div id="signupPage">
            <img id="creditImg" src={credit} />
            <div id="signupSection">
                <h1>Get started absolutely free.</h1>
                <p class="small">Enter your details below.</p>
                <form id="signup-form" onSubmit={handleSubmit}>
                    <input type="text" name="firstname" placeholder='First Name' onChange={handleChange} onBlur={handleValidation} onInvalid={handleValidation} required />
                    {error.firstname && <span className='err'>{error.firstname}</span>}
                    <input type='text' name='lastname' placeholder='Last Name' onChange={handleChange} onBlur={handleValidation} onInvalid={handleValidation} required />
                    {error.lastname && <span className='err'>{error.lastname}</span>}
                    <input type='email' name='email' placeholder='Email' onChange={handleChange} onBlur={handleValidation} onInvalid={handleValidation} required />
                    {error.email && <span className='err'>{error.email}</span>}
                    <input type='password' name='password' placeholder='Password' onChange={handleChange} onBlur={handleValidation} onInvalid={handleValidation} required />
                    {error.password && <span className='err'>{error.password}</span>}
                    <input type='password' name='confirmPassword' placeholder='Repeat Password' onChange={handleChange} onBlur={handleValidation} onInvalid={handleValidation} required />
                    {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                    <p id="login-link">Already have an account? <a href='#/'>SIGN IN</a></p>
                    <input type='submit' id='signup-button' value='SIGN UP' />
                </form>
            </div>
        </div>
    )
}

export default SignUp