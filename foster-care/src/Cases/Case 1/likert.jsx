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
        if (!selectedValue_1 || !selectedValue_2) {
            alert("Please complete both Likert scales before submitting.");
            return; // Exit early if either Likert scale is not completed
        }

        const localStorageData = {
            selectedValue_1,
            selectedValue_2
        };

        // Retrieve data from localStorage
        for (let key in localStorage) {
            if (
                key.startsWith('goal') ||               // form data
                key.startsWith('intervention') ||       // form data
                key.startsWith('objective') ||          // form data
                key === 'treeData' ||                   // tree data
                key === 'expandedNodes' ||              // expanded nodes
                key === 'totalTime' ||                  // time spent on pdfs
                key === 'formTimeSpent' ||              // time spend on forms
                key === 'narrativeInput' ||             // narrative data
                key === 'elapsedTimes'
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

        const storedCase = parseInt(localStorage.getItem('case'));
        if (storedCase < 3) {
            console.log("Likert chosen:", selectedValue_1);
            console.log("Likert chosen:", selectedValue_2);
            const stored = (storedCase + 1).toString()
            localStorage.setItem('case', stored);
            history.push('/home');
            window.location.reload();
        } else {
            console.log("Likert chosen:", selectedValue_1);
            console.log("Likert chosen:", selectedValue_2);
            const stored = (storedCase + 1).toString()
            localStorage.setItem('case', stored);
            history.push('/complete');
            window.location.reload();
        }
    };

    const downloadLocalStorageData = () => {
        const localStorageData = {};

        // Retrieve data from localStorage
        for (let key in localStorage) {
            if (
                key.startsWith('goal') ||               // form data
                key.startsWith('intervention') ||       // form data
                key.startsWith('objective') ||          // form data
                key === 'treeData' ||                   // tree data
                key === 'expandedNodes' ||              // expanded nodes
                key === 'totalTime' ||                  // time spent on pdfs
                key === 'formTimeSpent' ||              // time spend on forms
                key === 'narrativeInput' ||             // narrative data
                key === 'elapsedTimes'
            ) {
                localStorageData[key] = localStorage.getItem(key);
            }
        }

        // Convert data to a JSON string
        const jsonData = JSON.stringify(localStorageData, null, 2);

        // Create a Blob object containing the JSON data
        const blob = new Blob([jsonData], { type: 'application/json' });

        // Create a temporary anchor element to trigger the download
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'localStorageData.json';

        // Simulate a click on the anchor element to trigger the download
        document.body.appendChild(a);
        a.click();

        // Cleanup
        document.body.removeChild(a);
        URL.revokeObjectURL(url);


        const storedCase = parseInt(localStorage.getItem('case'));
        if (storedCase < 3) {
            console.log("Likert chosen:", selectedValue_1);
            console.log("Likert chosen:", selectedValue_2);
            const stored = (storedCase + 1).toString()
            localStorage.setItem('case', stored);
            history.push('/home');
            window.location.reload();
        } else {
            console.log("Likert chosen:", selectedValue_1);
            console.log("Likert chosen:", selectedValue_2);
            const stored = (storedCase + 1).toString()
            localStorage.setItem('case', stored);
            history.push('/complete');
            window.location.reload();
        }
    };

    return (
        <div>
            <Likert {...likertOptions_1} />
            <Likert {...likertOptions_2} />
            {parseInt(localStorage.getItem('case')) < 3 && (
                <button className="submission" onClick={handleSubmit}>Submit</button>
            )}
            {parseInt(localStorage.getItem('case')) === 3 && (
                <button className="submission" onClick={downloadLocalStorageData}>Download LocalStorage Data</button>
            )}
        </div>
    //     You can click download localstorage data without having likert scale selected
    );
}
