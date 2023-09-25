import React from 'react'
import "../css/CreateEvent.css"
import eLogo from "../assets/e_logo.png"
import xLogo from "../assets/x.png"
import Button from "@material-ui/core/Button";



const CreateEvent = () => {

    //Handeles close button click
    //Should sent the user back to the events page
    const handleClose = () => {

    }

    // Handles event creation
    //
    // Should get the information from the inputs
    // Then should send a post request to the api, 
    // and get the OK response
    const handleCreate = () => {

    }

    return (
        <div id="create-page">
            <div id="header">
                <img id="eLogo" src={eLogo} />
                <Button id="close-button"
                    startIcon={<img src={xLogo} />}
                >
                    <h3>Close</h3>
                </Button>
            </div>
            <div id="create-box">
                <h1 id='box-title'>Create new event</h1>
                <p id='details'>Enter details below</p>
                <input id="title" placeholder='Title'></input>
                <input id="description" placeholder='Description'></input>
                <input id="date" placeholder='Date'></input>
                <input id="time" placeholder='Time'></input>
                <input id="capacity" placeholder='Capacity'></input>
                <button id="create-button">CREATE NEW EVENT</button>
            </div>
        </div>
    )
}

export default CreateEvent