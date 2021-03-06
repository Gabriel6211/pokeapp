import React from 'react'

import './input.scss'

export const Input = ({text, handleChange}) => {
    return <div>
        <input name="searchInput" type="text" className="search-input" onChange={handleChange} required />
        <div className="underline" />
        <label className="placeholder">{text}</label>
    </div>
}

export default Input;