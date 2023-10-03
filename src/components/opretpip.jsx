import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Knap from './Knap'
import './knap.css'
import {Pip} from "../entities/pip"
//Importerer staee funktionen fra react biblioteket
import { useState } from "react"
import Pips from "./Pips"

export default function Opretpip() {
    //Deklarerer state variabler med en tom "string", set username er en funktion som kan bruges til at ændre state
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const [pips, setPips] = useState([]);

    // //Jeg er i gang med at prøve at implementerer, at man ikke kan opret pip uden at have udfyldt det hele og dermed kommer der en besked op. 
    // const [usernameTodo, setusernameTouchedTodo] = useState(false);
    // const [contentTodo, setcontentTouchedTodo] = useState(false);
    // const [pipsTodo, setpipsTouchedTodo] = useState(false);


    const handleUsernameChange = (e) => {
        console.log(e.target.value);
        //Fanger det bruger navn som brugeren skriver ind i input
        setUsername(e.target.value);
      }

    const handleContentChange = (e) => {
        console.log(e.target.value);
        //Fanger det content som brugeren skriver i textarea
        setContent(e.target.value);
      }


    const handleAddPipClick = () =>{
        //Renderer et nyt objekt til array
        const newPip = new Pip(username, content);
        //Opdaterer array my nyt pip som indeholder username og content
        setPips([...pips, newPip]);
        //Tømmer input feltet efter click
        setUsername(''); 
        //Tømmer textarea felt efter click
        setContent('');
        console.log("hej");
    }



    return(
        <div>
            <div className="post">
                <div className='homebox'><h1>Home</h1></div>
                    <div className="pip">
                        <div className='brugernavn'>
                            <input type="text" value={username} placeholder='Brugernavn' onChange={handleUsernameChange} />
                        </div>
                            <textarea onChange={handleContentChange} value={content} placeholder='Hvad har du på hjertet? '></textarea>
                    </div>
                <div className='btnFlex'>
                    <button onClick={handleAddPipClick} className='btn'><Knap/></button>
                </div>
            </div>
                {pips.map((pip) => (
                     <div className="newPip" key={content}>
                        <Pips 
                        username={pip.username} 
                        content={pip.content} />
                    </div>
                ))};
        </div>
    )
}