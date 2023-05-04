import React from "react";
import "./UserMenu.css";
import arrow from "./arrow.svg";

export default class UserMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpened: false
        }
    }
    
    render() {
        const handleClick = (e) => {
            e.preventDefault();
            if (this.state.isOpened) {
                this.setState({isOpened: false});
            } else {
                this.setState({isOpened: true});
            }
        }
        return(
            <React.Fragment>
                <a href="#" className={"menu-button" + (this.state.isOpened ? " opened" : "")} onClick={(e) => handleClick(e)}>
                    <img src={arrow} alt="Open User's Menu" />
                </a>
                {this.state.isOpened && <div className="user-menu">
                    <a href="#" className="account">Profile</a>
                    <a href="#" className="logout">Log Out</a>
                </div>}
            </React.Fragment>
        );
    }
}