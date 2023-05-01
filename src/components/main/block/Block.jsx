import React from "react";
import "./Block.css";
import plus from "./plus.svg";

export default class Block extends React.Component {
    render() {
        return(
            <div className="block">
                <h2>{this.props.name}</h2>
                <div className="wrapper">
                    <div className="content">
                        <p className="content-card">Login page – performance issues</p>
                        <p className="content-card">Login page – performance issues</p>
                        <p className="content-card">Login page – performance issues</p>
                        <p className="content-card">Login page – performance issues</p>
                        <p className="content-card">Login page – performance issues</p>
                        <p className="content-card">Login page – performance issues</p>
                        <p className="content-card">Login page – performance issues</p>
                        <p className="content-card">Login page – performance issues</p>
                        <p className="content-card">Login page – performance issues</p>
                        <p className="content-card">Login page – performance issues</p>
                        <p className="content-card">Login page – performance issues</p>
                        <p className="content-card">Login page – performance issues</p>
                    </div>
                    <a href="#" className="add">
                        <img src={plus} alt="Plus Icon" />
                        Add Card
                    </a>
                </div>
            </div>
        );
    }
}