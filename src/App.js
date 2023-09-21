import logo from './logo.svg';
import "./App.css";
import "./components/sidebar.css";
import Sidebar from "./components/Sidebar";

import "./components/opretpip.css";
import Opretpip from "./components/Opretpip";

function App() {
  return (
    <div className="App">
      <div className='bigFlex'>
        <Sidebar/>
      <main>
      <Opretpip/>
      </main>
      </div>
    </div>
  );
}

export default App;
