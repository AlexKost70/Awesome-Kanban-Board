import React, { useEffect } from "react";
import "./Main.css";
import Block from "./block/Block";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataMock: [
                {
                    title: 'Backlog',
                    issues: [
                        {
                            id: '65',
                            name: 'Test',
                            description: 'Fix all the perfomance issues'
                        }
                    ]
                }, 
                {
                    title: 'Ready',
                    issues: [
                        {
                            id: '2',
                            name: 'Testgggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
                            description: 'Fix all the perfomance issues'
                        }
                    ]
                },
                {
                    title: 'In Progress',
                    issues: [
                    ]
                },
                {
                    title: 'Finished',
                    issues: [
                    ]
                }
            ]
        }
    }

    render() {
        const blocks = {
            0: "backlog",
            1: "ready",
            2: "progress",
            3: "finished",
        };

        const addIssue = (name) => {
            // const newDataMock = [...this.state.dataMock];
            // newDataMock[0].issues.push({
            //     id: Math.trunc(Math.random() * 9999), 
            //     name: name, 
            //     description: "This task has no description"
            // });
            // this.setState({ dataMock: newDataMock });
            // countTasks();


            if (!localStorage.getItem("backlog")) {
                let issues = [{
                    id: Math.trunc(Math.random() * 9999), 
                    name: name, 
                    description: "This task has no description"
                }];
                localStorage.setItem("backlog", JSON.stringify(issues));
            } else {
                let issues = JSON.parse(localStorage.getItem("backlog"));
                issues.push({
                    id: Math.trunc(Math.random() * 9999), 
                    name: name, 
                    description: "This task has no description"
                });
                localStorage.setItem("backlog", JSON.stringify(issues));
            }
        }

        const moveIssue = (blockId, issueId) => {
            // const newDataMock = [...this.state.dataMock];
            // newDataMock[blockId-1].issues.forEach((issue, index) => {
            //     if (issue.id == issueId) {
            //         newDataMock[blockId].issues.push(issue);
            //         newDataMock[blockId-1].issues.splice(index, 1);
            //         this.setState({ dataMock: newDataMock });
            //     }
            // });
            // countTasks();


            
            let blockFrom = JSON.parse(localStorage.getItem(blocks[blockId-1]));
            let blockTo;
            if (!localStorage.getItem(blocks[blockId])) {
                blockTo = [];
                localStorage.setItem(blocks[blockId], JSON.stringify(blockTo));
            }
            blockTo = JSON.parse(localStorage.getItem(blocks[blockId]));
            blockFrom.forEach((issue, index) => {
                console.log(index, issue.id, issueId);
                if(issue.id == issueId) {
                    blockTo.push(issue);
                    blockFrom.splice(index, 1);
                    localStorage.setItem(blocks[blockId-1], JSON.stringify(blockFrom));
                    localStorage.setItem(blocks[blockId], JSON.stringify(blockTo));
                }
            });
            
        }

        const countTasks = () => {
            this.props.updateCounter(this.state.dataMock[0].issues.length, this.state.dataMock[3].issues.length);
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