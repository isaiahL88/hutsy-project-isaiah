import React from 'react'
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { Avatar, makeStyles } from "@material-ui/core";
import { useState, useEffect } from 'react';
import "../css/ProfileSlider.css"



// This component is a profile slider with two options
//
// profile: will navigate user to profile (profile is unimplemented)!!!
// logout: will simply used the passes setToken prop to delete token allowing user to be on this page
const ProfileSlider = ({ setToken }) => {
    const [anchorEl, setAnchorEl] = useState([]);
    const open = Boolean(anchorEl);


    //Handles click for the profile slider
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    //Handles closing the menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Handles profile click
    const handleProfile = () => {
        //ADD NAVIGATION TO PROFILE ONCE IMPLIMENTED
    }

    //Handles logout click
    const handleLogout = () => {
        setToken(null);
    }

    //

    var nameCode = "";
    var fullName = "";

    //called on start up
    useEffect(() => {
        //get the user's name from session to be displayed on this component
        processName(sessionStorage.getItem('first'), sessionStorage.getItem('last'));

    }, []);

    //This code just makes the user's name suitable to use with the
    //ai used to generate profile picutre
    const processName = (firstName, lastName) => {

        fullName = firstName + " " + lastName;
        nameCode = firstName + "+" + lastName;
        //This code isn't necasary anymore because first name and last name
        //are alrady sperated
        // var names = name.split(2);
        // if (names.length > 2) {
        //     var fullname = [names.slice(0, 1), names.slice(-1)];
        //     nameCode = fullname.join("+");
        // } else {
        //     nameCode = names.join("+");
        // }
    }

    return (
        <div id="profile">
            <div>
                <Button id="profile-button"
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    startIcon={<span class="material-symbols-outlined">
                        arrow_drop_down
                    </span>}
                >
                    {"John Doe"}
                    <img class="avatar" id="profile-icon" src={"https://ui-avatars.com/api/?name=John+Doe"} />
                </Button>

            </div>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    )

}

export default ProfileSlider