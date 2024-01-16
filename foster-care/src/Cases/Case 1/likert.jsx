import React, { useState } from 'react';
import Likert from 'react-likert-scale';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import "../likert.css";

export default function LikertScale() {
    const history = useHistory(); // Initialize useHistory hook

    const [selectedValue_1, setSelectedValue_1] = useState(null);
    const [selectedValue_2, setSelectedValue_2] = useState(null);

    const likertOptions_1 = {
        id: "likert_1",
        question: "Compared to other cases you have seen, how complex is this case?",
        responses: [
            { value: 1, text: "Not at all complex" },
            { value: 2, text: "Slightly complex" },
            { value: 3, text: "Somewhat complex" },
            { value: 4, text: "Fairly complex" },
            { value: 5, text: "Extremely complex" }
        ],
        onChange: val => {
            setSelectedValue_1(val);
        },
        className: "noMarginRight"
    };

    const likertOptions_2 = {
        id: "likert_2",
        question: "Please rate your level of confidence in this treatment plan",
        responses: [
            { value: 1, text: "Not at all confident" },
            { value: 2, text: "Slightly confident" },
            { value: 3, text: "Somewhat confident" },
            { value: 4, text: "Fairly confident" },
            { value: 5, text: "Completely confident" }
        ],
        onChange: val => {
            setSelectedValue_2(val);
        },
        className: "noMarginRight"
    };

    const handleSubmit = () => {
        const storedCase = localStorage.getItem('case');
        if (storedCase < 3) {
            if (selectedValue_1) {
                console.log("Likert chosen:", selectedValue_1);
                console.log("Likert chosen:", selectedValue_2);
                const stored = (parseInt(localStorage.getItem('case')) + 1).toString()
                localStorage.setItem('case', stored);
                history.push('/home');
                window.location.reload();
            } else {
                console.log("Please select a value before submitting");
            }
        } else {
            console.log("Likert chosen:", selectedValue_1);
            console.log("Likert chosen:", selectedValue_2);
            const stored = (parseInt(localStorage.getItem('case')) + 1).toString()
            localStorage.setItem('case', stored);
            history.push('/complete');
            window.location.reload();
        }
    };

    return (
        <div>
            <Likert {...likertOptions_1} />
            <Likert {...likertOptions_2} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
