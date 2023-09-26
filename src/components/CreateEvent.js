import React from 'react'
import "../css/CreateEvent.css"
import eLogo from "../assets/e_logo.png"
import xLogo from "../assets/x.png"
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";




const CreateEvent = () => {
    const navigate = useNavigate();

    //Handeles close button click
    //Should sent the user back to the events page
    const handleClose = () => {
        navigate("/events")
    }

    // Handles event creation
    //
    // Should get the information from the inputs
    // Then should send a post request to the api, 
    // and get the OK response
    const handleCreate = (e) => {
        e.preventDefault();

        //adding shorting variables for cleaner code
        var title = e.target.title.value;
        var description = e.target.description.value;
        var date = e.target.date.value;
        var time = e.target.time.value;
        var capacity = e.target.capacity.value;

        //api is down, jsut a temporary fetch
        // var url;
        // fetch(url, {
        //     method: 'POST',
        //     body: 
        // })
    }

    return (
        <div id="create-page">
            <div id="header">
                <img id="eLogo" src={eLogo} />
                <Button id="close-button"
                    startIcon={<img src={xLogo} />}
                    onClick={handleClose}
                >
                    <h3>Close</h3>
                </Button>
            </div>
            <form id="create-box" onSubmit="handleCreate">
                <h1 id='box-title'>Create new event</h1>
                <p id='details'>Enter details below</p>
                <input id="title" name="title" placeholder='Title'></input>
                <input id="description" name="description" placeholder='Description'></input>
                <input id="date" name="date" placeholder='Date'></input>
                <input id="time" name="time" placeholder='Time'></input>
                <input id="capacity" name="capacity" placeholder='Capacity'></input>
                <input id="create-button" type="submit" value="CREATE NEW EVENT" />
            </form>
        </div>
    )
}

export default CreateEvent