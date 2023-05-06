import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTasks: localStorage.getItem("data") ? (JSON.parse(localStorage.getItem("data")))[0].issues.length : 0,
            finishedTasks: localStorage.getItem("data") ? (JSON.parse(localStorage.getItem("data")))[3].issues.length : 0
        }
    }
    render() {
        return(
            <footer>
                <div className="status">
                    <p className="active">Active tasks: {this.state.activeTasks}</p>
                    <p className="finish">Finished tasks: {this.state.finishedTasks}</p>
                </div>
                <p className="copyright">Kanban board by Alexander Kostrikin, 2023</p>
            </footer>
        );
    }
}