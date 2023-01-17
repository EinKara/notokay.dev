import React, { Component } from "react";

// CSS
import './css/site-extensions.css'
import './css/links.css'

import HeaderBox from "./elements/HeaderBox";

export default class About extends Component {
    render() {
        return (
            <div className="Page">
                <HeaderBox title="About" subtitle="Inforatio" />
                <div className="Body">
                    <p>
                        &emsp;&emsp; My name is [REDACTED]. 
                        I do music, programming, and other things. There isn't much to include here as of the current time.
                    </p>
                </div>
            </div>
        )
    }
}