import React from 'react';
import './Cases/forms.css';
import {useHistory} from "react-router-dom";

export default function SubmitDataButton({ onClick }) {
    const history = useHistory();

    const handleSubmitData = () => {

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
