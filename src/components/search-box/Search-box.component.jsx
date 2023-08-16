import React from "react";

import './Search-box.style.css';

export const SearchBox = ( {placeholder , handle_change} ) => (
    <input 
        className="search"
        type="search"
        placeholder= {placeholder}
        onChange={handle_change}
    />
);