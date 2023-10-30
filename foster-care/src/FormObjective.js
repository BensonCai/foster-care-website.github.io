import React, { useState, useEffect } from 'react';

export default function ObjectiveForm({ nodeId, onSubmit }) {
    // Initialize formData state with data from localStorage or with default values
    const [formData, setFormData] = useState(() => {
        const storedFormData = JSON.parse(localStorage.getItem(`objectiveFormData-${nodeId}`)) || {
            title: '',
            description: '',
            // Add more fields as needed with default values
        };
        return storedFormData;
    });

    useEffect(() => {
        // Load form data from localStorage when the component mounts
        const storedFormData = JSON.parse(localStorage.getItem(`objectiveFormData-${nodeId}`));
        if (storedFormData) {
            setFormData(storedFormData);
        }
    }, [nodeId]);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        onSubmit(formData);
    };

    useEffect(() => {
        // Save form data to localStorage whenever it changes
        localStorage.setItem(`objectiveFormData-${nodeId}`, JSON.stringify(formData));
    }, [formData, nodeId]);

    return (
        <div className="form-container">
            <h2>Objective</h2>
            <form className="align" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Objective Statement</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        style={{ width: "99.25%" }}
                    />
                </div>
                {/*<button type="submit">Submit</button>*/}
            </form>
        </div>
    );
}
