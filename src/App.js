import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Best from './components/Best';
import Great from './components/Great';
import Nav from './components/Nav';
import Page from './components/Page';
import Field from './components/Field';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/best' element= {<Best/>} />
          <Route path='/field' element = {<Field/>} />
          <Route path='/great' element = {<Great/>} />
          <Route path='/nav' element = {<Nav/>} />
          <Route path='/page' element ={<Page/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
