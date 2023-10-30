import React, { useState, useEffect } from 'react';

export default function GoalForm({ nodeId, onSubmit }) {
    const [formData, setFormData] = useState(() => {
        const storedFormData = JSON.parse(localStorage.getItem(`goalFormData-${nodeId}`)) || {
            title: '',
            goal: '',
            outcome: '',
            strengths: '',
            resources: '',
        };
        return storedFormData;

    });

    // Load the form data from local storage on component mount
    useEffect(() => {
        const savedData = localStorage.getItem(`goalFormData-${nodeId}`);
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, [nodeId]);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Save the form data to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem(`goalFormData-${nodeId}`, JSON.stringify(formData));
    }, [formData, nodeId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        onSubmit(formData);
    };

    return (
        <div className="form-container">
            <h2>Goal Form</h2>
            <form className="align" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Problem Addressed:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label htmlFor="goal">Goal Statement:</label>
                    <textarea
                        id="goal"
                        name="goal"
                        value={formData.goal}
                        onChange={handleFormChange}
                        style={{ width: "99.25%" }}
                    />
                </div>
                <div>
                    <label htmlFor="outcome">Desired Outcome for this Need:</label>
                    <textarea
                        id="outcome"
                        name="outcome"
                        value={formData.outcome}
                        onChange={handleFormChange}
                        style={{ width: "99.25%" }}
                    />
                </div>
                <div>
                    <label htmlFor="strengths">Individuals Strengths and Skills being utilized:</label>
                    <textarea
                        id="strengths"
                        name="strengths"
                        value={formData.strengths}
                        onChange={handleFormChange}
                        style={{ width: "99.25%" }}
                    />
                </div>
                <div>
                    <label htmlFor="resources">Support, Resources, and Organizations Needed:</label>
                    <textarea
                        id="resources"
                        name="resources"
                        value={formData.resources}
                        onChange={handleFormChange}
                        style={{ width: "99.25%" }}
                    />
                </div>
                {/* Add more form fields here */}
                {/*<button type="submit">Submit</button>*/}
            </form>
        </div>
    );
}
