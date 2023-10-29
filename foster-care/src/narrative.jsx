import React, { useState, useEffect } from 'react';
import './treeform.css';

export default function Narrative() {
    // Initialize the input value from local storage if available
    const [inputValue, setInputValue] = useState(
        localStorage.getItem('narrativeInput') || ''
    );

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
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter your text"
                className="narrativeInput"
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
}
