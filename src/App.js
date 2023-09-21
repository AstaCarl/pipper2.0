import logo from './logo.svg';
import "./components/sidebar.css";
import Sidebar from "./components/Sidebar";

import "./components/opretpip.css";
import Opretpip from "./components/Opretpip";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Opretpip/>
    </div>
  );
}

export default App;
