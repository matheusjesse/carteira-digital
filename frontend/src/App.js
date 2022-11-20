import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    <GlobalStyle />
    </>
  );
}

export default App;
