import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="flex justify-center items-center p-4 bg-blue-500 text-white">
            <div className="flex space-x-4">
                <Link to="/" className="hover:bg-blue-700 px-3 py-1 rounded">Home</Link>
                <Link to="/todo" className="hover:bg-blue-700 px-3 py-1 rounded">Todo</Link>
                <Link to="/remainder" className="hover:bg-blue-700 px-3 py-1 rounded">Remainder</Link>
            </div>
        </nav>
    );
};

export default NavigationBar;