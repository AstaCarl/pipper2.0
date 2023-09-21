import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import myLogo from './twitter.logo.png'
import myAvatar from './adventurer-1695289491040.png'
import "./knap.css"
import Knap from "./Knap"

export default function Sidebar(props) {
    return (
        <body>  
            <nav class="nav flex-column sidebar">
                <figure>
                <img className='logo' src={myLogo} alt="Logo" />
                <h1>PIPPER</h1>
                </figure>
                <a className="nav-link active" aria-current="page" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
                </svg>Home
                </a>
                <a className="nav-link" href="#">
                <img className='profil-avatar' src={myAvatar} alt="avatar" />Profile
                </a>
                < Knap/>
            </nav>  
        </body>
    )
}
