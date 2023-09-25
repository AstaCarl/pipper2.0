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

import {Pip} from "./entities/pip"

const pips = [
  new Pip('Asta', 'Lorem ipsum', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Buster'),

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
        {pips.map((pipObj) => <Pips pips={pipObj}/>)}
        </div>
      </main>
      </div>
    </div>
  );
}

export default App;