export default function Knap(props) {
        const handleButtonClick = () => {
          const pips = document.getElementById("pips");
          if (pips.style.display === 'none') {
            pips.style.display = 'block';
          } else {
            pips.style.display = 'none';
          }
        };
    return(
        <div>
            <button className="myBtn" id="myBtn" onClick={handleButtonClick}>
                Opret Pip
            </button>
        </div>
    )
}