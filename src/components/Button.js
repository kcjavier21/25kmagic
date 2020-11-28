import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const styleButton = ['btn--primary', 'btn--outline'];
const sizeButton = ['btn--medium', 'btn-large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = styleButton.includes(buttonStyle) ? buttonStyle : styleButton[0];
    const checkButtonSize = sizeButton.includes(buttonStyle) ? buttonStyle : sizeButton[0];

    return (
        <Link to='/' className='btn-mobile'> 
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
};