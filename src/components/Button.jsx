import React from 'react';
import '../css/Button.css';

const Button = ({ onClick, className, text }) => {
    return (
        <button
            onClick={onClick}
            className={`btn ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;