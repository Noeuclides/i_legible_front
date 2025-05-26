import { Routes, Route, Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Home from './pages/Home';
import About from './pages/About';
import LoginForm from './components/LoginForm';

function App() {
  const { token } = useAuth();

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4">
      <Routes>
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
