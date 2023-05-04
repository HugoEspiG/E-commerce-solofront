import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Sala from './pages/Sala'
import LoginGame from './pages/LoginGame';
import Questions from './pages/Questions';
import Usuario from './pages/Usuario';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Game/:Nsala' element={<Sala/>}/>
        <Route path='/LogSala' element={<LoginGame/>}/>
        <Route path='/Questions' element={<Questions/>}/>
        <Route path='/User' element={<Usuario/>}/>
      </Routes>
    </div>
  );
}

export default App;
