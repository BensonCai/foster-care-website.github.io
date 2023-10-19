import React, { useState } from 'react';

export default function GoalForm({ onSubmit }) {
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
            <h2>Goal Form</h2>
            <form className="align" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Problem Addressed:<br/></label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Desired Outcome for this Need:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        style={{ width: "99.25%" }}
                    />
                </div>
                <div>
                    <label htmlFor="description">Goal Statement:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        style={{ width: "99.25%" }}
                    />
                </div>
                <div>
                    <label htmlFor="description">Individuals Strengths and Skills being utilized:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        style={{ width: "99.25%" }}
                    />
                </div>
                <div>
                    <label htmlFor="description">Support, Resources, and Organizations Needed:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        style={{ width: "99.25%" }}
                    />
                </div>
                {/* Add more form fields here */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
