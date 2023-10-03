import React from 'react'
import { useState, useEffect } from 'react';
import Event from './Event';
import "../css/Events.css"


const Events = (props) => {
    const [eventsTest, setEventsTest] = useState([
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
            attendees: [4, 6, 7, 8, 10, 12],
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
            attendees: [4, 6, 7, 8, 10, 12, 20, 25, 30, 50, 70, 77],
            createAt: Date.parse(new Date),
            updatedAt: Date.parse(new Date),
            createdBy: { id: 6 },
            updatedBy: { id: 6 }
        },
        {
            title: 'Book Club',
            description: 'The first meeting of the harry potter book club, we will be starting of with Harry Potter and the Philosophers Stone',
            startsAt: new Date(),
            capacity: 22,
            attendees: [3, 4, 6, 7, 10, 20, 30, 50, 70, 89, 100],
            createAt: Date.parse(new Date),
            updatedAt: Date.parse(new Date),
            createdBy: { id: 9 },
            updatedBy: { id: 2 }
        },
        {
            title: 'Yorku Lions Football',
            description: 'Try outs for the York University Football team, please bring cleats as well as gloves if you have them.',
            startsAt: new Date(),
            capacity: 40,
            attendees: [2, 4, 6, 7, 10, 20, 30, 50, 70, 89, 100, 12],
            createAt: Date.parse(new Date),
            updatedAt: Date.parse(new Date),
            createdBy: { id: 3 },
            updatedBy: { id: 3 }
        },
        {
            title: 'Club Fair',
            description: 'Club fair for York University student clubs, please come and look for something you have interest in!',
            startsAt: new Date(),
            capacity: 100,
            attendees: [2, 4, 6, 7, 10, 20, 30, 50, 70, 89, 100, 12, 27, 36, 42, 20, 40, 500],
            createAt: Date.parse(new Date),
            updatedAt: Date.parse(new Date),
            createdBy: { id: 3 },
            updatedBy: { id: 3 }
        }

    ]);


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
    //Checks the id from the event and compares it to the id on session storage
    //The return of this function is pasts to the event component to display the correct
    //button.
    const checkAttend = (event) => {
        console.log("Checking if user attends or owns " + event.title);
        //If the user created the event, they have the option to edit
        if (event.createdBy.id == sessionStorage.getItem('id')) {
            return 'EDIT'
            //If they are in the event they have the option to leave
        } else if (event.attendees.includes(parseInt(sessionStorage.getItem('id')))) {
            return 'LEAVE'
            //If they are not attending they have the option to join
        } else {
            return 'JOIN'
        }
    }

    // This method handles the event button click
    //
    // This button can have 3 different intetions, to join, leave, or to edit.
    // Passed down to the event to use as an onlclick for the event button
    // For now only join and leave are implement and do not update the online api,

    const handleButton = (value, title) => {
        //if the user wants to join I just add their id from session storage into the local array
        if (value == "JOIN") {

            //Find the event with matching title and just update attendees
            //We must create a new object in place of the event that is currently in the state array
            setEventsTest(eventsTest.map(event => {
                if (event.title == title) {
                    //Complicated line...
                    //This will take all old attributes in the event but change the attendees attribute to
                    //now include the id of the new user
                    return { ...event, attendees: [...event.attendees, parseInt(sessionStorage.getItem('id'))] };
                } else {
                    return event;
                }
            }));
        } else if (value == "LEAVE") {
            //Must update the attendees of the click event to no longer include this user's id
            setEventsTest(eventsTest.map(event => {
                if (event.title == title) {
                    //Complicated line...
                    //This will take all old attributes in the event but change the attendees attribute to
                    //now include the id of the new user
                    return { ...event, attendees: [...event.attendees.filter((id) => id != sessionStorage.getItem('id'))] };
                } else {
                    return event;
                }
            }));
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
                    buttonOnClick={handleButton}
                />
            )}
        </div>
    )

}

export default Events