import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Sala from './pages/Sala'
import LoginGame from './pages/LoginGame';

function App() {
  return (
    <div className="App bg-image">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Game/:Nsala' element={<Sala/>}/>
        <Route path='/LogSala' element={<LoginGame/>}/>
      </Routes>
    </div>
  );
}

export default App;
