import React, { useState } from 'react';
import CalendarModal from './CalendarModal';

const Remainder = () => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [date, setDate] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSendEmail = () => {
        // Example logic to open a new email window in Outlook with the specified details
        const outlookMailtoUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(details)}&to=`;
        window.open(outlookMailtoUrl);
    };

    const isFormValid = title && details && date;

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Reminder</h1>
            <div className="flex flex-col items-start">
                <label className="mr-2" htmlFor="title">Title:</label>
                <input
                    id="title"
                    className="border rounded p-2 mb-2"
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="flex flex-col items-start">
                <label className="mr-2" htmlFor="details">Details:</label>
                <input
                    id="details"
                    className="border rounded p-2 mb-2"
                    type="text"
                    placeholder="Enter Details"
                    value={details}
                    onChange={e => setDetails(e.target.value)}
                />
            </div>
            <input
                className="border rounded p-2 mb-2"
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            <button
                className={`bg-blue-500 text-white rounded p-2 my-2 ${!isFormValid && 'opacity-50 cursor-not-allowed'}`}
                onClick={() => setShowModal(true)}
                disabled={!isFormValid}
            >
                Add to Calendar
            </button>
            <button
                className={`bg-blue-500 text-white rounded p-2 my-2 ${!isFormValid && 'opacity-50 cursor-not-allowed'}`}
                onClick={handleSendEmail}
                disabled={!isFormValid}
            >
                Send Email
            </button>
            <CalendarModal showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
};

export default Remainder;