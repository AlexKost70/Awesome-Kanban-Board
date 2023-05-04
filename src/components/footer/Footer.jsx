import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="status">
                    <p className="active">Active tasks: {this.props.activeTasks}</p>
                    <p className="finish">Finished tasks: {this.props.finishedTasks}</p>
                </div>
                <p className="copyright">Kanban board by Alexander Kostrikin, 2023</p>
            </footer>
        );
    }
}