import React from 'react';
import './tab2.css';

export default function SubmitDataButton({ onClick }) {
    const handleButtonClick = () => {
        const confirmed = window.confirm('Are you sure you want to submit?');

        if (confirmed) {
            // Call the provided onClick function to perform the submit action
            console.log("submitted")
            onClick();
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
