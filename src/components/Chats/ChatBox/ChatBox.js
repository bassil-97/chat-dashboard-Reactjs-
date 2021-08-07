import React from 'react';
import './ChatBox.css';

import RecievedMessage from '../../Message/RecievedMessage/RecievedMessage';
import SentMessage from '../../Message/SentMessage/SentMessage';
import Seperator from '../../../UI/Seperator/Seperator';
import MessageSender from '../../Message/MessageSender/MessageSender';

export default function ChatBox(props) {

    return (
        <div className="chatBox bg-white">
            <div className="chatBox__header bg-light">
                <div className="d-flex justify-content-center align-items-center">
                    <img class="rounded-circle" alt="80x80" src="https://picsum.photos/id/3/50/50" data-holder-rendered="true" />
                    <div className="username ml-3">
                        <h6 className="mb-0 font-weight-bold text-black">Nika Jerrardo</h6>
                        <small className="text-primary">last online 5 hours ago</small>
                    </div>
                </div>
                <div className="chat__actions">
                    <button type="button" class="btn mr-3 circle-btn">
                        <i class="fas fa-paperclip"></i>
                    </button>
                    <button type="button" class="btn circle-btn">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                </div>
            </div>
            <div className="chatBox__body">
                <RecievedMessage />
                <SentMessage />
                <Seperator>
                    3 Days age
                </Seperator>
            </div>
            <div className="chatBox__footer">
                <MessageSender />
            </div>
        </div>
    )
}
