import React from "react";
import "./Block.css";
import plus from "./plus.svg";

export default class Block extends React.Component {
    render() {
        const {title, issues} = this.props;

        const AddBacklog = () => {
            return <input type="text" name="" id="" />
        }

        const AddAnother = () => {
            return <input type="button" name="" id="" />
        }

        const handleClick = (e) => {
            e.preventDefault();
            if (e.target.parentNode.previousElementSibling.textContent == "Backlog") {
                console.log(1);
            } else {
                console.log(e.target.parentNode.previousElementSibling);
            }
        }
        return(
            <div className="block" id="title">
                <h2>{title}</h2>
                <div className="wrapper">
                    {issues.map(issue => (
                        <p className="content-card" id={issue.id}>{issue.name}</p>
                    ))}
                    <a href="#" className="add" onClick={(e) => handleClick(e)}>
                        <img src={plus} alt="Plus Icon" />
                        Add Card
                    </a>
                </div>
            </div>
        );
    }
}