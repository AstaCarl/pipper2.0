import React from 'react'

export default function Pips(props){
    //Destructering
    const { username, content } = props;

    return (
        <div className="pippost">
            <div className="bruger">
                {/* Renderer value fra input tag i Opretpip.jsx */}
            <h1>{username}</h1>
            </div>
            <div className="opslag">
                {/* Renderer value fra texarea tag i Opretpip.jsx */}
                <p>{content}</p>
            </div> 
        </div>
    )
}

  
  
  
  
  
  