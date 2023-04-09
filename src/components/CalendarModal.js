import React from 'react';

const CalendarModal = ({ showModal, setShowModal }) => {
    if (!showModal) return null;

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50" onClick={() => setShowModal(false)} />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded p-4 z-10 shadow-lg">
                <button className="absolute top-0 right-0 p-2" onClick={() => setShowModal(false)}>X</button>
                <h2 className="text-lg font-bold mb-4">Select Calendar</h2>
                <ul>
                    <li className="my-2">
                        <button className="bg-blue-500 text-white rounded p-2" onClick={() => {}}>
                            Apple Calendar
                        </button>
                    </li>
                    <li className="my-2">
                        <button className="bg-blue-500 text-white rounded p-2" onClick={() => {}}>
                            Google Calendar
                        </button>
                    </li>
                    <li className="my-2">
                        <button className="bg-blue-500 text-white rounded p-2" onClick={() => {}}>
                            Outlook Calendar
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default CalendarModal;