import React from 'react';
import './SentMessage.css';

export default function SentMessage() {
    return (
        <div className="w-100 d-flex justify-content-end">
            <div className="d-flex justify-content-center align-items-center flex-row-reverse">
                <img src="https://img.icons8.com/material-outlined/20/000000/double-tick.png"/>
                <div className="sent_message mr-1">
                    <p className="mb-0"> 
                    Hey! Okay, send out.
                    </p>
                </div>
                <i class="fas fa-ellipsis-h mr-2"></i>
            </div>
        </div>
    )
}
