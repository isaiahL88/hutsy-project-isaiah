import React from 'react'
import { useState, useEffect } from 'react';
import ProfileSlider from './ProfileSlider';
import Events from './Events';
import grid from "../assets/grid.svg";
import listView from "../assets/list_view.svg";
import "../css/EventsPage.css"


/*
    This component is used as the Events page

    Allows user to reach profile using the ProfileSlider
    
    Browse events and filter using the buttons in the events tab

    Also uses an Events compenent to display the events
*/
class EventsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            activeView: 0
        }
    }

    handleSelect = (index) => {
        this.setState({
            activeTab: index
        })
    }

    handleView = (index) => {
        this.setState({
            activeView: index
        })
    }
    render() {
        const { activeTab, activeView } = this.state;
        return (
            <div id="eventsPage" >
                <div>
                    <img src="" />
                    <ProfileSlider />
                </div>
                <div id="eventsTab">
                    <ul id="filterTabs">
                        <li id={activeTab == 0 ? 'active' : ''} onClick={this.handleSelect.bind(this, 0)}>ALL EVENTS</li>
                        <li id={activeTab == 1 ? 'active' : ''} onClick={this.handleSelect.bind(this, 1)}>FUTURE EVENTS</li>
                        <li id={activeTab == 2 ? 'active' : ''} onClick={this.handleSelect.bind(this, 2)}>PAST EVENTS</li>
                    </ul>
                    <div id="viewButtons">
                        <svg onClick={this.handleView.bind(this, 0)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" stroke="black" stroke-opacity="0.01" stroke-width="0" />
                            <path id={activeView == 0 ? 'activeView' : 'normalView'} fill-rule="evenodd" clip-rule="evenodd" d="M4 11H9V5H4V11ZM4 18H9V12H4V18ZM10 18H15V12H10V18ZM16 18H21V12H16V18ZM10 11H15V5H10V11ZM16 5V11H21V5H16Z" fill="#111936" />
                        </svg>
                        <svg onClick={this.handleView.bind(this, 1)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" stroke="black" stroke-opacity="0.01" stroke-width="0" />
                            <path id={activeView == 1 ? 'activeView' : 'normalView'} fill-rule="evenodd" clip-rule="evenodd" d="M4 18H21V12H4V18ZM4 5V11H21V5H4Z" fill="#A9AEB4" />
                        </svg>

                    </div>
                </div>
                <Events />
            </div >
        )
    }

}

export default EventsPage