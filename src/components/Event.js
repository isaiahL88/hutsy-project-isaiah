import React from 'react'
import "../css/Event.css"
import { useState, useEffect } from 'react';


/*  Compenent used to represent an event

    Doesn't need every attibute from the props, only a select few
    Not sure if it would be better to useState for each attribute, but
    for now I did not, in order to be more effecient and faster
 
    Will be using state for the event-button, because I will used hooks to 
    managed functionaly, and the page should be re-rendered after clicl as well
 */
const Event = (props) => {
    //Hold the event status, with respect to the currently signed in user
    const [eventStatus, setEventStatus] = useState([]);
    useEffect(() => {

    }, []);
    return (
        <div>
            <p id="startsAt">{props.startsAt}</p>
            <h3 id="title">{props.title}</h3>
            <p id="author">{props.author}</p>
            <p id="description">{props.description}</p>
            <button id="event-button"></button>
        </div>
    )
}

export default Event