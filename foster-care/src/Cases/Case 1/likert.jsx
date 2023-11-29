import React, { useState } from 'react';
import Likert from 'react-likert-scale';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import "../likert.css";

export default function LikertScale() {
    const history = useHistory(); // Initialize useHistory hook

    const [selectedValue, setSelectedValue] = useState(null);

    const likertOptions = {
        id: "likert",
        question: "Please rate your level of confidence in this treatment plan",
        responses: [
            { value: 1, text: "Not at all confident" },
            { value: 2, text: "Slightly confident" },
            { value: 3, text: "Somewhat confident" },
            { value: 4, text: "Fairly confident" },
            { value: 5, text: "Completely confident" }
        ],
        onChange: val => {
            setSelectedValue(val);
        },
        className: "noMarginRight"
    };

    const handleSubmit = () => {
        const storedCase = localStorage.getItem('case');
        if (storedCase < 3) {
            if (selectedValue) {
                console.log("Likert chosen:", selectedValue);
                const stored = (parseInt(localStorage.getItem('case')) + 1).toString()
                localStorage.setItem('case', stored);
                history.push('/home');
                window.location.reload();
            } else {
                console.log("Please select a value before submitting");
            }
        } else {
            console.log("Likert chosen:", selectedValue);
            const stored = (parseInt(localStorage.getItem('case')) + 1).toString()
            localStorage.setItem('case', stored);
            history.push('/complete');
            window.location.reload();
        }
    };

    return (
        <div>
            <Likert {...likertOptions} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
