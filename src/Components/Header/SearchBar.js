import React, { useState } from 'react';
import './SearchBar.css'; // Import CSS file for styling

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [options, setOptions] = useState([]);

    const handleSearchChange = async (event) => {
        const { value } = event.target;
        setSearchTerm(value);

        try {
            const response = await fetch(`http://127.0.0.1:5000/get_symbols?query=${value}`);
            if (!response.ok) {
                throw new Error('Failed to fetch options');
            }
            const data = await response.json();
            console.log('Data from API:', data); // Log the data returned from the API
            
            setOptions(data);
        } catch (error) {
            console.error('Error fetching options:', error);
        }
    };

    console.log('Options:', options); // Log the options state

    return (
        <div className="search-bar-container">
    <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Type Ticker"
        list="options-list"
        className="search-input"
    />
    {searchTerm != "" ? (
        <div className="dropdown">
            <ul className="options-list">
                {options.map((option) => (
                    <li key={option.id} className="option-item">
                        <button
                            className="option-button"
                            onClick={() => setSearchTerm(option.value)}
                        >
                            {option.symbol}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    ) : (
        <br></br>
    )}
    </div>
    );
}

export default SearchBar;
