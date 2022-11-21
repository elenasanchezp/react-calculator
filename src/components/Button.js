import React from 'react';
import '../styles/Button.css'

function Button (props){

    const isOperator = val => {
       return isNaN(val) && (val !== '.') && (val !== '=');
    };

    return (
       <div className={`container-button ${isOperator(props.children) ? 'operator': ''}`} 
            onClick={() => props.manageClicks(props.children)}>
        {props.children}
       </div>
    )
};

export default Button