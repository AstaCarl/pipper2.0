import "./App.css";
// Sidebar import
import "./components/sidebar.css";
import Sidebar from "./components/Sidebar";

// Pips import
import Pips from "./components/Pips"
import "./components/pips.css"

// Opretpips import
import "./components/opretpip.css";
import Opretpip from "./components/Opretpip";

//Import af Pip constructor
import {Pip} from "./entities/pip"


//pips array med pip obj
const pips = [
  new Pip('Asta', 'Tis'),

];

function App() {
  return (
    <div className="App">
      <div className='bigFlex'>
        <Sidebar/>
      <main>
        <div className='contentbox'>
          <Opretpip/>
        </div>
        <div className='contentpips'>
          {/* Map over pips array, og renderer et nyt pip component med data fra array */}
          {pips.map((pipObj) => (
            <Pips 
            key={pipObj.content} 
            content={pipObj.content} 
            username={pipObj.username}  />
          ))}
        </div>
      </main>
      </div>
    </div>
  );
}

export default App;