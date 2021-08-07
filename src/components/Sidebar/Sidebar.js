import React from 'react';
import './Sidebar.module.css';

export default function Sidebar() {
    return (
    <div className="vertical-nav bg-white" id="sidebar">
        <div className="py-4 px-3 mb-4">
            <div className="media d-flex align-items-center flex-column">
                <img loading="lazy" src="https://avatars.githubusercontent.com/u/61696257?v=4" alt="..." width="100" height="100" className="rounded-circle img-thumbnail shadow-sm" />
                <div className="media-body text-center">
                    <h5 className="mb-0 mt-4">Bassil H. Alqadi</h5>
                </div>
            </div>
        </div>

        <ul className="nav flex-column bg-white mb-0" id="navMenus">
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fa fa-th-large mr-3 fa-fw"></i>
                    home
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i class="fa fa-comment-dots mr-3 fa-fw"></i>
                    Chat
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i class="far fa-user mr-3 fa-fw"></i>
                    contact
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i class="far fa-bell mr-3 fa-fw"></i>
                    notifications
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i class="far fa-calendar-alt mr-3 fa-fw"></i>
                    calendar
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i class="fas fa-cog mr-3 fa-fw"></i>
                    settings
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i class="fas fa-power-off  mr-3 fa-fw"></i>
                    logout
                </a>
            </li>
        </ul>
    </div>
    )
}
