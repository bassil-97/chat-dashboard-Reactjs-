import React from 'react';
import './RecievedMessage.css';

export default function RecievedMessage() {
    return (
        <div className="w-100 d-flex justify-content-start align-items-start">
            <img class="rounded-circle" alt="80x80" src="https://picsum.photos/id/3/30/30" data-holder-rendered="true" />
            <div className="d-flex justify-content-start align-items-center">
                <div className="recieved__message ml-3">
                    <p className="mb-0"> 
                    Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                    </p>
                </div>
                <i class="fas fa-ellipsis-h ml-2"></i>
            </div>
        </div>
    )
}
