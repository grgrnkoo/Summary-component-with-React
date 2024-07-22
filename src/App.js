import { useEffect } from 'react';
import './App.css';
import data from './data.json'
import Stats from './components/Stats';
import YourResult from './components/YourResult';


function App() {
  return (
    <div className="App">

      <YourResult data={data}/>
      <Stats data={data} className="stats" />
    </div>
  );
}

export default App;
