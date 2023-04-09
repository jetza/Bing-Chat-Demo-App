import React, { useState, useEffect } from 'react';

function Todo() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('items')) || [];
        console.log('Loaded items:', savedItems);
        if (savedItems.length > 0) {
            setItems(savedItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
        console.log('Saved items:', items);
    }, [items]);

    function addItem() {
        setItems([...items, newItem]);
        setNewItem('');
    }

    function removeItem(index) {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    return (
        <div className="max-w-md mx-auto bg-gray-100 p-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Todo</h1> {/* Center title */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <div className="text-center"> {/* Center add item button */}
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
                        onClick={addItem}
                    >
                        Add Item
                    </button>
                </div>
            </div>
            <ul className="list-disc list-inside">
                {items.map((item, index) => (
                    <li key={index} className="mb-2 flex items-center">
                        <span className="text-gray-700">{item}</span>
                        <button
                            className="ml-auto bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => removeItem(index)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;