import React, { useState } from 'react';

export default function ObjectiveForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        // Define your form fields here
        title: '',
        description: '',
        // Add more fields as needed
    });

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        onSubmit(formData);
    };

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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
