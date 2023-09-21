import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import myLogo from './twitter.logo.png'

export default function Sidebar(props) {
    return (
        <body>  
            <nav class="nav flex-column sidebar">
                <figure>
                <img className='logo' src={myLogo} alt="Logo" />
                <h1>PIPPER</h1>
                </figure>
                <a class="nav-link active" aria-current="page" href="#">Active</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
            </nav>  
        </body>
    )
}
