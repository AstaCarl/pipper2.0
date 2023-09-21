import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import avatar from './adventurer-1695289491040.png'

export default function Opretpip(props) {
    return(
        <body>

            <h1>Home</h1>
            
            <avatar>
                <img className='logo' src={avatar} alt="avatar" />
                <p>Hvad har du på hjertet?</p>
            </avatar>


        </body>
    )
}