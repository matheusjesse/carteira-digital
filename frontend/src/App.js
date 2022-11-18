import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
      </Routes>
    <GlobalStyle />
    </>
  );
}

export default App;
