import React from 'react'
import "../css/Event.css"
import { useState, useEffect } from 'react';
import person from "../assets/person.png"

/*  Compenent used to represent an event

    Doesn't need every attibute from the props, only a select few
    Not sure if it would be better to useState for each attribute, but
    for now I did not, in order to be more effecient and faster
 
    Will be using state for the event-button, because I will used hooks to 
    managed functionaly, and the page should be re-rendered after clicl as well
 */
const Event = (props) => {
    const isList = props.isList;
    useEffect(() => {

    }, []);

    const handleEventButton = () => {
        props.buttonOnClick(props.button, props.title);
    }
    return (
        <div id={isList ? "active-event-box" : "event-box"} >
            <p id={isList ? "active-startsAt" : "startsAt"}>{props.startsAt}</p>
            <div id="title-box">
                <p id={isList ? "active-title" : "title"}>{props.title}</p>
                <p id={isList ? "active-author" : "author"}>{props.author}</p>
            </div>
            <p id={isList ? "active-description" : "description"}>{props.description}</p>
            {/* Had to create a secondary author elemnt because the old one didn't react to the
    orde     r attribute because it was moved into a div with title  */}
            <p id={isList ? "active-author-on" : "active-author-off"}>{props.author}</p>
            <div id={isList ? "active-bottom-row" : "bottom-row"}>
                <div id={isList ? "active-attendees-box" : "attendees-box"}>
                    <img id={isList ? "active-person" : "person"} src={person} />
                    <p id="attendees">{props.attendees}</p>
                </div>
                <button id={isList ? "active-event-button" : "event-button"} class={props.button + " eventButton"} value={props.botton} onClick={handleEventButton}>{props.button}</button>
            </div>
        </div >
    )
}

export default Event