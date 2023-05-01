import React from "react";
import "./Main.css";
import Block from "./block/Block";

export default class Main extends React.Component {
    render() {
        const dataMock = [
            {
                title: 'Backlog',
                issues: [
                ]
            }, 
            {
                title: 'Ready',
                issues: [
                    {
                        id: '2',
                        name: 'Login page – performance issues',
                        description: 'Fix all the perfomance issues'
                    },
                    {
                        id: '3',
                        name: 'Login page – performance issues',
                        description: 'Fix all the perfomance issues'
                    },                     {
                        id: '2',
                        name: 'Login page – performance issues',
                        description: 'Fix all the perfomance issues'
                    },
                    {
                        id: '3',
                        name: 'Login page – performance issues',
                        description: 'Fix all the perfomance issues'
                    },
                    {
                        id: '2',
                        name: 'Login page – performance issues',
                        description: 'Fix all the perfomance issues'
                    },
                    {
                        id: '3',
                        name: 'Login page – performance issues',
                        description: 'Fix all the perfomance issues'
                    },
                    {
                        id: '2',
                        name: 'Login page – performance issues',
                        description: 'Fix all the perfomance issues'
                    },
                    {
                        id: '3',
                        name: 'Login page – performance issues',
                        description: 'Fix all the perfomance issues'
                    }
                ]
            },
            {
                title: 'In Progress',
                issues: [
                    {
                        id: '4',
                        name: 'Login page – performance issues',
                        description: 'Fix all the perfomance issues'
                    },
                    {
                        id: '5',
                        name: 'Login page – performance issues',
                        description: 'Fix all the perfomance issues'
                    }
                ]
            },
            {
                title: 'Finished',
                issues: [
                    {
                        id: '6',
                        name: 'Login page – performance issues',
                        description: 'Fix all the perfomance issues'
                    },
                    {
                        id: '7',
                        name: 'Login page – performance issues',
                        description: 'Fix all the perfomance issues'
                    }
                ]
            }
        ]
        return(
            <main>
                {dataMock.map(block => (<Block title={block.title} issues={block.issues} />))}
            </main>
        );
    }
}