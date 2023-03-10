import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Emplisiting from './Emplisiting';
import Add from './component/Add';
import Edit from './component/Edit';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Emplisiting' element={<Emplisiting/>} />
          <Route path='/Add' element={<Add/>} />
          <Route path='/Edit/:emid' element={<Edit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
