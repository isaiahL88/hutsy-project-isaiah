import React from 'react'
import { useState, useEffect } from 'react';
import ProfileSlider from './ProfileSlider';
import Events from './Events';
import grid from "../assets/grid.svg";
import listView from "../assets/list_view.svg";
import "../css/EventsPage.css"
import eLogo from "../assets/e_logo.png"
import add from "../assets/add.svg"
import { useNavigate, Navigate, Link } from "react-router-dom";
import CreateEvent from './CreateEvent';



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
            activeView: 0,
        }
    }

    handleSelect = (index) => {
        this.setState({
            activeTab: index
        })
    }

    //used to handle event creation button
    handleAdd = () => {
        this.setState({
            add: true
        })
        console.log('add new event!!!');

    }

    //This method is used to handle the view size buttons\
    //
    // index: this is just used to identify which button was pressed
    //        0 -> block view
    //        1 -> list view
    // note: the activeView is a state attribute of this component used to 
    //       represent which button is active
    handleView = (index) => {
        this.setState({
            activeView: index
        })
    }
    render() {
        const { activeTab, activeView } = this.state;
        return (
            <div id="eventsPage" >
                <div id="events-header">
                    <img id="eLogo" src={eLogo} />
                    <ProfileSlider setToken={this.props.setToken} />
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
                <Events isList={activeView === 1} />
                <div id="add-div">
                    {/* Decided to use a link instead of navigate due to complications with class components */}
                    <Link to="/CreateEvent">
                        <svg id="add-button" xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60">
                            <path fill="#323C46" d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 
                    31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 
                    83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 
                    0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                        </svg>
                    </Link>
                </div>
            </div >
        )
    }

}

export default EventsPage