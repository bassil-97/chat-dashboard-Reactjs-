import React from 'react';
import './Seperator.css';

export default function Seperator(props) {
    return (
        <div className="separator">
            {props.children}
        </div>
    )
}
