import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here
        console.log(formData);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg mb-2">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border rounded-lg p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg mb-2">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border rounded-lg p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg mb-2">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="border rounded-lg p-2 w-full"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;