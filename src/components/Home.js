import React from 'react';
import ContactForm from "./ContactForm";

const HomePage = () => {
    return (
        <div className="bg-green-200 p-10">
            <h1 className="text-4xl font-bold mb-4">Welcome to our Todo and Reminder App!</h1>
            <p className="text-lg mb-4">This app allows you to keep track of your tasks and set reminders so you never forget anything important.</p>
            <img src="https://source.unsplash.com/featured/?todo" alt="Todo" className="w-full rounded-lg mb-4" />
            <img src="https://source.unsplash.com/featured/?reminder" alt="Reminder" className="w-full rounded-lg mb-4" />
            <ContactForm />
        </div>
    );
};

export default HomePage;