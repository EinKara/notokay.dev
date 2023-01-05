import React, { Component } from "react";

// CSS
import './css/site-extensions.css'

export default class Home extends Component {
    render() {
        return (
            <div className="Page">
                <div className="Header">
                    <div className="HeaderTextBox">
                        <h1>Home</h1>
                        <h5>🏳‍⚧</h5>
                    </div>
                </div>
                <div className="Body">
                    <p>   Stuff will go here, eventually. Currently, there is nothing. Apologies to any who may be disappointed by this.
                    </p>
                </div>
            </div>
        )
    }
}