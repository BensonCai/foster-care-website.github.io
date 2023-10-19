import React from "react";
import "./complete.css";

export default function complete() {
    return (
        // <body style={{ backgroundColor: 'black' }}>
        <div>
            <div id="container">
                <div className="funnytext">
                    <p>Thank you for taking your time to do this survey!</p>
                </div>
                <div className="steam" id="steam1"></div>
                <div className="steam" id="steam2"></div>
                <div className="steam" id="steam3"></div>
                <div className="steam" id="steam4"></div>

                <div id="cup">
                    <div id="cup-body">
                        <div id="cup-shade"></div>
                    </div>
                    <div id="cup-handle"></div>
                </div>

                <div id="saucer"></div>

                <div id="shadow"></div>
                <div className="funnytext">
                    <p>You may close the TAB now</p>
                </div>
            </div>
        </div>
    )
}