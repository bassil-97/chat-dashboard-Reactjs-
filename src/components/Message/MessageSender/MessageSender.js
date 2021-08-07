import React from 'react';
import './MessageSender.css';

export default function MessageSender() {
    return (
        <div className="message__sender__container">
            <div className="d-flex align-items-center w-100">
                <div className="btn-group dropup">
                    <button type="button" className="btn btn-primary rounded-circle message__actions_btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-plus"></i>
                    </button>
                    <div className="dropdown-menu message__actions__dropdown">
                       <div className="dropdown-item message__actions__item px-3 mt-2">
                        <i class="fas fa-film"></i>
                       </div>
                       <div className="dropdown-item message__actions__item px-3 mt-2">
                        <i class="fas fa-image"></i>
                       </div>
                       <div className="dropdown-item message__actions__item px-3 mt-2">
                        <i class="far fa-file"></i>
                       </div>
                    </div>
                </div>
                <form className="w-100">
                    <input className="message__input w-100" type="text" placeholder="Type a message here" />
                </form>
            </div>
            <div className="send__buttons_container">
                <i class="far fa-smile-beam mr-3"></i>
                <button type="button" className="btn send__btn">
                    <i class="fas fa-paper-plane mr-1"></i>
                </button>
            </div>
        </div>
    )
}
