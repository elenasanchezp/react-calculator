import React from 'react';
import '../styles/Input.css'

function Input (props){
    return (
       <div className='input'>
        {props.input}
       </div>
    )
};

export default Input