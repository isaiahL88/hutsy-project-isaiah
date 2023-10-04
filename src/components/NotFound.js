import React from 'react';
import "../css/NotFound.css";
import { useNavigate } from "react-router-dom";
import credit from "../assets/credit.png"
import clone from "../assets/clone.png"



const NotFound = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("#/");
    }
    return (
        <div id="error-page">
            <img id="cloneImg" src={clone} />
            <img id="creditImg" src={credit} />
            <div id="error-section">
                <div id="text-box">
                    <h1>404 Error - page not found</h1>
                    <p>Seems like Darth Vader just hits our website and drops it down.</p>
                    <p>Please press the refresh button and everything should be fine again.</p>
                    <button id="refresh-button" onClick={handleClick}>REFRESH</button>

                </div>
            </div>
        </div>
    )
}

export default NotFound