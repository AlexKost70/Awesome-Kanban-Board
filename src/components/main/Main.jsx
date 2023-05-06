import React from "react";
import "./Main.css";
import Block from "./block/Block";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataMock: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) :
            [
                {
                    title: 'Backlog',
                    issues: []
                }, 
                {
                    title: 'Ready',
                    issues: []
                },
                {
                    title: 'In Progress',
                    issues: []
                },
                {
                    title: 'Finished',
                    issues: []
                }
            ]
        }
    }

    render() {

        const addIssue = (name) => {
            const newDataMock = [...this.state.dataMock];
            newDataMock[0].issues.push({
                id: Math.trunc(Math.random() * 9999), 
                name: name, 
                description: "This task has no description"
            });
            updateData(newDataMock);
        }

        const moveIssue = (blockId, issueId) => {
            const newDataMock = [...this.state.dataMock];
            newDataMock[blockId-1].issues.forEach((issue, index) => {
                if (issue.id == issueId) {
                    newDataMock[blockId].issues.push(issue);
                    newDataMock[blockId-1].issues.splice(index, 1);
                    updateData(newDataMock);
                }
            });  
        }

        const updateData = (newData) => {
            this.setState({ dataMock: newData });
            localStorage.setItem("data", JSON.stringify(newData));
            this.props.updateCounter();
        }

        return(
            <main>
                <Block title={this.state.dataMock[0].title} id={0} issues={this.state.dataMock[0].issues} addCard={addIssue} />
                <Block title={this.state.dataMock[1].title} id={1} issues={this.state.dataMock[1].issues} addCard={moveIssue} prevIssues={this.state.dataMock[0].issues} />
                <Block title={this.state.dataMock[2].title} id={2} issues={this.state.dataMock[2].issues} addCard={moveIssue} prevIssues={this.state.dataMock[1].issues} />
                <Block title={this.state.dataMock[3].title} id={3} issues={this.state.dataMock[3].issues} addCard={moveIssue} prevIssues={this.state.dataMock[2].issues} />
            </main>
        );
    }
}