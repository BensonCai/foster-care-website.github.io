import React, { useState } from 'react';

export default function InterventionForm({ interventionCounter, onSubmit }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    console.log(interventionCounter)

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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
