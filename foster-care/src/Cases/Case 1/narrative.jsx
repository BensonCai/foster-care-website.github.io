import React, { useState, useEffect } from 'react';
import '../treeform.css';
import SubmitDataButton from "../../submitButton";
import {useHistory} from "react-router-dom";
import usePageTimer from "../pagetimer";

export default function Narrative() {
    const elapsedTime = usePageTimer("Case Summary")

    // Initialize the input value from local storage if available
    const [inputValue, setInputValue] = useState(
        localStorage.getItem('narrativeInput') || ''
    );
    const history = useHistory();

// Warn the user before refreshing the page
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = 'All form data will be erased if you refresh. Do you want to continue?';

            // Check if the user is trying to refresh
            // can't find better documentation onf navigation.type
            if (performance.navigation.type === 1) {
                console.log('reloaded');
                // The navigation type indicates a page reload
                localStorage.removeItem('treeData'); // Reset localStorage
                localStorage.removeItem('expandedNodes');
                localStorage.removeItem('narrativeInput');
                for (let key in localStorage) {
                    if (key.startsWith('objective') || key.startsWith('goal') || key.startsWith('intervention')) {
                        localStorage.removeItem(key);
                    }
                }
            } else {
                // The user canceled the refresh
                event.preventDefault();
            }
        }

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    // const handleSubmitData = () => {
    //     const localStorageData = {};
    //
    //     for (let key in localStorage) {
    //         if (
    //             key.startsWith('goal') ||               // form data
    //             key.startsWith('intervention') ||       // form data
    //             key.startsWith('objective') ||          // form data
    //             key === 'treeData' ||                   // tree data
    //             key === 'expandedNodes' ||              // expanded nodes
    //             key === 'totalTime' ||                  // time spent on pdfs
    //             key === 'formTimeSpent' ||              // time spend on forms
    //             key === 'narrativeInput'                // narrative data
    //         ) {
    //             localStorageData[key] = localStorage.getItem(key);
    //         }
    //     }
    //
    //     console.log(localStorageData)
    //     // send it to server when i a db to connect to
    //
    //     // eslint-disable-next-line no-restricted-globals
    //     history.push('/complete');
    //
    //     // return localStorageData;
    // };

    // Create a function to handle input changes
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        // Update local storage with the new value
        localStorage.setItem('narrativeInput', newValue);
    };

    // Create a function to handle saving the input
    const handleSave = () => {
        console.log('Input saved:', inputValue);
    };

    // Use useEffect to save the input value to local storage when it changes
    useEffect(() => {
        localStorage.setItem('narrativeInput', inputValue);
    }, [inputValue]);

    return (
        <div>
            <h1>Detailed Instructions</h1>
            <p >Provide a brief assessment of major case factors and youth functioning. Also list all identified problems/needs and indicate whether they will be treated, referred, or deferred</p>

            <textarea
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter your text"
                className="narrativeInput"
            />
            <p>Elapsed: {elapsedTime} sec</p>

            {/*<button onClick={handleSave}>Save</button>*/}
            <SubmitDataButton/>
        </div>
    );
}
