
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nonalcoholic from './components/Nonalcoholic';
import Body from './components/Body';
import alcoholic from './components/alcoholic';
import Random from './components/Random';
import Alcoholic from './components/alcoholic';

function App() {
  return (
    <div className="App">
     <Body/>
     <Routes>
       <Route path='/' element={<Alcoholic/>}/>
       <Route path='/about' element={<Nonalcoholic/>}/>
       <Route path='/posts' element={<Random/>}/>
       <Route path='*' element={<Alcoholic/>}/>
     </Routes>
     
    </div>

  );
}

export default App;
