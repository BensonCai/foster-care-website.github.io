import React from 'react';
import './Cases/forms.css';
import {useHistory} from "react-router-dom";

export default function SubmitDataButton({ onClick }) {
    const history = useHistory();

    const handleSubmitData = () => {
        const localStorageData = {};

        for (let key in localStorage) {
            if (
                key.startsWith('goal') ||               // form data
                key.startsWith('intervention') ||       // form data
                key.startsWith('objective') ||          // form data
                key === 'treeData' ||                   // tree data
                key === 'expandedNodes' ||              // expanded nodes
                key === 'totalTime' ||                  // time spent on pdfs
                key === 'formTimeSpent' ||              // time spend on forms
                key === 'narrativeInput'                // narrative data
            ) {
                localStorageData[key] = localStorage.getItem(key);
            }
        }

        // send it to server when i a db to connect to
        console.log(localStorageData)

        // reset it for the next case
        for (let key in localStorageData) {
            localStorage.removeItem(key);
        }

        // eslint-disable-next-line no-restricted-globals
        history.push('/likert');

        // return localStorageData;
    };

    const handleButtonClick = () => {
        const confirmed = window.confirm('Are you sure you want to submit?');

        if (confirmed) {
            // Call the provided onClick function to perform the submit action
            console.log("submitted")
            handleSubmitData();
        } else {
            // nothing really needs to happen
            console.log("canceled")
        }
    };

    return (
        <button className="submission" onClick={handleButtonClick}>
            Submit
        </button>
    );
}
