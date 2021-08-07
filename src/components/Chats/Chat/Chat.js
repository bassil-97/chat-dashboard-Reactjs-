import React from 'react';
import './Chat.css';

export default function Chat(props) {

    const chatBoxClasses = props.wasRead ? 
                            'was__read' :
                            'bg-light';
    const statusClass = props.wasRead ? 
    'text-light' :
    'text-primary';

    return (
        <div className={`chat ${chatBoxClasses}`}>
            <div className="chat__header">
                <div className="d-flex justify-content-center align-items-center">
                    <img class="rounded-circle" alt="80x80" src="https://picsum.photos/id/3/50/50" data-holder-rendered="true" />
                    <div className="username ml-3">
                        <h6 className="mb-0 font-weight-bold text-black">{props.username}</h6>
                        {props.status && <small className={`${statusClass}`}>{props.status}</small>}
                    </div>
                </div>
                <div>
                    <small>{props.sentTime}</small>
                </div>
            </div>
            <div className="chat__body">
                <p>
                Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).
                </p>
            </div>
        </div>
    )
}
