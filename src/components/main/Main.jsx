import React from "react";
import "./Main.css";
import Block from "./block/Block";

export default class Main extends React.Component {
    render() {
        return(
            <main>
                <Block name="Backlog" />
                <Block name="Ready" />
                <Block name="In Progress" />
                <Block name="Finished" />
            </main>
        );
    }
}