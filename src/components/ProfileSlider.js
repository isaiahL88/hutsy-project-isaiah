import React from 'react'
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { Avatar, makeStyles } from "@material-ui/core";
import { useState } from 'react';
import "../css/ProfileSlider.css"



const ProfileSlider = () => {
    const [anchor, setAnchor] = useState([]);
    const open = Boolean(anchor);


    //Handles click for the profile slider
    const handleClick = (event) => {
        setAnchor(event.currentTarget);
    };


    //Handles closing the menu
    const handleClose = () => {
        setAnchor(null);
    };

    //Handles profile click
    const handleProfile = () => {
        //ADD NAVIGATION TO PROFILE ONCE IMPLIMENTED
    }

    //Handles logout click
    const handleLogout = () => {
        //Todo
    }

    const nameCode = "";
    const name = "John Doe";




    //This code just makes the user's name suitable to use with the
    //ai used to generate profile picutre
    const processName = (name) => {
        name = "John Doe";
        var names = name.split(2);
        if (names.length > 2) {
            var fullname = [names.slice(0, 1), names.slice(-1)];
            nameCode = fullname.join("+");
        } else {
            nameCode = names.join("+");
        }
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
                    {name}
                    <img class="avatar" id="profile-icon" src={"https://ui-avatars.com/api/?name=John+Doe"} />
                </Button>

            </div>
            <Menu
                id="fade-menu"
                anchor={anchor}
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