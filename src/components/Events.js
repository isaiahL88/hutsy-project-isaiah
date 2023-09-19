import React from 'react'
import { useState, useEffect } from 'react';
import Event from './Event';


const Events = (props) => {
    // Using useState hook to hold the events for this page
    const [events, setEvents] = useState([]);

    return (
        <div>
            {events.map((event) =>
                <Event
                    title={event.title}
                />
            )}
        </div>
    )

    const fetchEvents() => {
        //Will need to change the url if we look for specific events....
        var url = "";
        fetch("")
    }

    // This code makes fetchEvents get called once when the 
    // component is first rendered
    useEffect(() => {
        fetchEvents()
    }, []);
}

export default Events