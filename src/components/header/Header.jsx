import React from "react";
import "./Header.css";
import Profile from "./profile/Profile";


export default class Header extends React.Component {
    render() {
        return(
            <header>
                <h1>Awesome Kanban Board</h1>
                <Profile />
            </header>
        );
    }
}