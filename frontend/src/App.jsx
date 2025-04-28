import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Search from './components/Search';
import Lists from './components/Lists';
import Home from './pages/Home';


const App = () => {
  const token = localStorage.getItem('token');

  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={token ? <Search/> : <Navigate to="/login" />} />
      <Route path="/lists" element={token ? <Lists/> : <Navigate to="/login" />}  />
    </Routes>
  );
};

export default App;
