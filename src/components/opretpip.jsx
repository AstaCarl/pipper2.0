import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import avatar from './adventurer-1695289491040.png'
import Knap from './Knap'
import './knap.css'

export default function Opretpip(props) {
    return(
        <body>

            <div className='homebox'><h1>Home</h1></div>

            <div className="pip">

                    <img className='avatar' src={avatar} alt="avatar" />
                    <textarea>Hvad har du på hjertet?</textarea>
            </div>

            <div className='button'><Knap/></div>

        </body>
    )
}