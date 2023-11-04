import React from 'react';
import Likert from 'react-likert-scale';
import "../likert.css";

export default function likertScale() {
    const likertOptions = {
        question: "Please rate your level of confidence in this treatment plan",
        responses: [
            { value: 1, text: "Not at all confident" },
            { value: 2, text: "Slightly confident" },
            { value: 3, text: "Somewhat confident", checked: true },
            { value: 4, text: "Fairly confident" },
            { value: 5, text: "Completely confident" }
        ],
        onChange: val => {
            console.log(val);
        }
    };
    return (
        <Likert {...likertOptions} />
    )
}