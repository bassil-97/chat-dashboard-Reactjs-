import React from 'react';
import './Chats.css';

import Chat from './Chat/Chat';

export default function Chats() {
    return (
        <div className="chats__wrapper">
            <div className="chats__header">
                <div className="chats__title">
                    <h3>Chats</h3>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle p-1 text-muted" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Recent Chats
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
                <button className="create__chat__button"><i className="fas fa-plus mr-2 ml-2"></i> Create New Chat</button>
            </div>
            <div className="chats__search bg-light">
                <div className="row">
                    <div className="col-lg-9 p-2">
                        <input type="search" className="chats__search__input" placeholder="Search" />
                    </div>
                    <div className="col-lg-3 p-2">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle text-muted" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Messages
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chats__items__wrapper">
                <Chat 
                    username={"Bassil Alqadi"}
                    status={<span className="text-primary"><i class="fas fa-ellipsis-h mr-1"></i> writes</span>}
                    sentTime={"1 minute age"}
                    wasRead={false}
                />
                <Chat 
                    username={"Jared Sunn"}
                    status={<span className="text-primary"><i class="fas fa-record-vinyl mr-1"></i> records voice message</span>}
                    sentTime={"1 minute age"}
                    wasRead={false}
                />
                <Chat 
                    username={"Nika Jerrardo"}
                    status={"last online 5 hours ago"}
                    sentTime={"3 days age"}
                    wasRead={true}
                />
                <Chat 
                    username={"David Amrosa"}
                    status={<span className="text-primary"><i class="fas fa-ellipsis-h mr-1"></i> writes</span>}
                    sentTime={"10 minute age"}
                    wasRead={false}
                />
            </div>
        </div>
    )
}
