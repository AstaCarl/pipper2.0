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

const todosDummyData = [
  new Pip('Asta', 'Lorem ipsum', 'https://api.dicebear.com/7.x/adventurer/svg?seed=Buster'),

];

// Content array
// const pipstest = [
//   {content: 'psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 
//   username: 'Asta', 
//   url: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Boots'},
//   {content: 'sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', 
//   username:'Julie', 
//   url:'https://api.dicebear.com/7.x/adventurer/svg?seed=Bubba'},
//   {content: 'sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to maksum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak', 
//   username: 'Monique', 
//   url:'https://api.dicebear.com/7.x/adventurer/svg?seed=Buster'}
// ]



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