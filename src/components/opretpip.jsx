import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import avatar from './adventurer-1695289491040.png'

export default function Opretpip(props) {
    return(
        <body>

            <div className='homebox'><h1>Home</h1></div>

            <div className="contentbox">

                
                <div className='avatar'>
                    <img className='avatar' src={avatar} alt="avatar" />
                </div>

                <div className='text'>
                    <p>Hvad har du på hjertet?</p>
                </div>

            </div>

        </body>
    )
}