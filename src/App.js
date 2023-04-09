import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavigationBar from "../src/components/NavigationBar"
import Todo from "../src/components/Todo";
import Remainder from "../src/components/Remainder";
import Home from "../src/components/Home";

const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/remainder" element={<Remainder />} />
            </Routes>
        </Router>
    );
};

export default App;