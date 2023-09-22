import React from 'react'
import { useState, useEffect } from 'react';
import Event from './Event';
import "../css/Events.css"


const Events = (props) => {
    // Using useState hook to hold the events for this page
    const [events, setEvents] = useState([]);
    const fetchEvents = () => {
        //Will need to change the url if we look for specific events....
        var url = "https://test.apihutsy.com/api/events";
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    // This code makes fetchEvents get called once when the 
    // component is first rendered
    useEffect(() => {
        fetchEvents()
        console.log("Fetching Events");
    }, []);

    return (
        <div id="event-box">
            {events.map((event) =>
                <Event
                    title={event.title}
                />
            )}
        </div>
    )

}

export default Events