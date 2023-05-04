import React from "react";

export default class BlockDescription extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    };

    render() {
        return(
            <div className="desc">
                <div className="desc-header">
                    <h2></h2>
                    <a href="#" className="close"></a>
                </div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        )
    }
}