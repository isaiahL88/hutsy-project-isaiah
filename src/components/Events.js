import React from 'react'
import { useState, useEffect } from 'react';
import Event from './Event';
import "../css/Events.css"


const Events = (props) => {
    const eventsTest = [
        {
            title: 'learning java',
            description: 'a short tutorial on the java programming language',
            startsAt: new Date(),
            capacity: 10,
            attendees: [3, 4, 6],
            createAt: Date.parse(new Date()),
            updatedAt: Date.parse(new Date()),
            createdBy: { id: 3 },
            updatedBy: { id: 3 }
        },

        {
            title: 'Ted Talk, How to Stay Creative',
            description: 'A talk showing the steps you need to take to utilize all your creativity',
            startsAt: new Date(),
            capacity: 30,
            attendees: [3, 4, 6, 7, 8, 10, 12],
            createAt: Date.parse(new Date),
            updatedAt: Date.parse(new Date),
            createdBy: { id: 4 },
            updatedBy: { id: 4 }
        },

        {
            title: 'Talent Show',
            description: 'A talent show hosted for the univeristy, allowing students to show off their skill',
            startsAt: new Date(),
            capacity: 30,
            attendees: [3, 4, 6, 7, 8, 10, 12, 20, 25, 30, 50, 70, 77],
            createAt: Date.parse(new Date),
            updatedAt: Date.parse(new Date),
            createdBy: { id: 6 },
            updatedBy: { id: 6 }
        }

    ];

    // Using useState hook to hold the events for this page
    const [events, setEvents] = useState([]);
    const fetchEvents = () => {
        //Will need to change the url if we look for specific events....
        var url = "https://test.apihutsy.com/api/events?sort=asc&fields=title";
        //This might be a risky line to add, but in theory, if the user is on this page
        //a token must exist
        var tokenString = sessionStorage.getItem('token');
        // console.log("Trying to fetch evens with jwt: " + tokenString);
        // fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //         'jwt': tokenString,
        //     }
        // })
        //     .then((response) => console.log(response.status))
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));
    }
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //just used for the list view toggle botton
    const isList = props.isList;
    //This function is used to check the annted / owernship status of a user with an event
    const checkAttend = (event) => {
        //If the user created the event, they have the option to edit
        if (event.createdBy.id === sessionStorage.getItem('id')) {
            return 'EDIT'
            //If they are in the event they have the option to leave
        } else if (event.attendees.includes('id')) {
            return 'LEAVE'
            //If they are not attending they have the option to join
        } else {
            return 'JOIN'
        }
    }

    // This code makes fetchEvents get called once when the 
    // component is first rendered
    useEffect(() => {
        fetchEvents()
        console.log("Fetching Events");
    }, []);

    return (
        <div id={isList ? "active-events-box" : "events-box"}>
            {eventsTest.map((event) =>
                <Event
                    isList={props.isList}
                    title={event.title}
                    author={event.createdBy.id}
                    startsAt={event.startsAt.toLocaleDateString('en-US', options)}
                    description={event.description}
                    //A small string used to show attendees / capacity
                    attendees={event.attendees.length + " of " + event.capacity}
                    // This will check the attend / owernshipo status of the user for this user
                    button={checkAttend(event)}
                />
            )}
        </div>
    )

}

export default Events