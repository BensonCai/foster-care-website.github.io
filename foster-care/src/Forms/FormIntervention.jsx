import React, { useState, useEffect } from 'react';

export default function InterventionForm({ interventionCounter, onSubmit }) {
    const [formData, setFormData] = useState(() => {
        const storedFormData = JSON.parse(localStorage.getItem(`interventionFormData-${interventionCounter}`)) || {
            description: '',
        };
        return storedFormData;
    });

    const storageKey = `interventionFormData-${interventionCounter}`;

    // Load the form data from local storage on component mount
    useEffect(() => {
        const savedData = localStorage.getItem(storageKey);
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, [storageKey]);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Save the form data to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(formData));
    }, [formData, storageKey]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        //onSubmit(formData);
    };

    return (
        <div className="form-container">
            <h2>Intervention</h2>
            <form className="align" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">{interventionCounter}</label>
                </div>
                <div>
                    <label htmlFor="description">Intervention Statement</label>
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
