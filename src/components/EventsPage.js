import React from 'react'
import { useState, useEffect } from 'react';
import ProfileSlider from './ProfileSlider';
import Events from './Events';

/*
    This component is used as the Events page

    Allows user to reach profile using the ProfileSlider
    
    Browse events and filter using the buttons in the events tab

    Also uses an Events compenent to display the events
*/
const EventsPage = () => {
    return (
        <div>
            <div>
                <img src="" />
                <ProfileSlider />
            </div>
            <div id="eventsTab">

            </div>
            <Events />
        </div>
    )
}

export default EventsPage