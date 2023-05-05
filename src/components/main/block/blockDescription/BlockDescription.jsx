import React, { useState } from "react";
import "./BlockDescription.css"
import { Link, useLocation } from "react-router-dom";

export default function BlockDescription(props) {
    const [description, setDescription] = useState(useLocation().state.description);

    const blocks = {
        0: "backlog",
        1: "ready",
        2: "progress",
        3: "finished",
    };

    const blockId = useLocation().state.blockId;
    const id = useLocation().state.id;

    const handleInput = (event) => {
        setDescription(event.target.textContent);
        props.updateDescription(blockId, id, event.target.textContent);
        let issue = JSON.parse(localStorage.getItem(blocks[blockId]));
        console.log(issue);
    }

    return(
        <main className="desc-page">
            <div className="desc">
                <div className="desc-header">
                    <h2>{useLocation().state.name}</h2>
                    <Link to="/" className="close"></Link>
                </div>
                <p contenteditable="true" onBlur={handleInput}>{description}</p>
            </div>
        </main>
    );
}