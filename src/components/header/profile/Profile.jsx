import React from "react";
import "./Profile.css";
import picture from "./profile.svg";
import UserMenu from "./userMenu/UserMenu";

export default class Profile extends React.Component {
    render() {
        return(
            <div className="profile">
                <img className="userpic" src={picture} alt="Profile Picture" />
                <UserMenu />
            </div>
        );
    }
}