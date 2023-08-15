import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavigationBar from "../src/components/NavigationBar"
import Todo from "../src/components/Todo";
import Reminder from "../src/components/Reminder";
import Home from "../src/components/Home";

const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/remainder" element={<Reminder />} />
            </Routes>
        </Router>
    );
};

export default App;