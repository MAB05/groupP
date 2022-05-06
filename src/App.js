import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nonalcoholic from './components/Nonalcoholic';
import Body from './components/Body';
import alcoholic from './components/alcoholic';
import Random from './components/Random';
import Alcoholic from './components/alcoholic';
import Header from './components/Header'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body />
      
      <Routes>
        <Route path='/' element={<Alcoholic />} />
        <Route path='/about' element={<Nonalcoholic />} />
        <Route path='/posts' element={<Random />} />
        <Route path='*' element={<Alcoholic />} />
      </Routes>
      <Footer></Footer> 

    </div>

  );
}

export default App;
