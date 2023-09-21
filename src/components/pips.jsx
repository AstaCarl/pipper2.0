import myAvatar from "./adventurer-1695289491040.png"
export default function Pips(props){
    return (
        <div className="pippost">
            <div className="bruger">
            <img className='brugerAvatar' src={props.pips.url} alt="profilbillede" />
            <h1>{props.pips.username}</h1>
            </div>
            <div className="opslag">
            {props.pips.content}
            </div>
        </div>
    )
}