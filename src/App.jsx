import { Routes, Route, Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Home from './pages/Home';
import About from './pages/About';
import LoginForm from './components/LoginForm';
import LessonPage from './components/LessonPage';
import RequireAuth from './components/RequireAuth';

function App() {
  const { token } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white p-6 font-hand">
    {/* <div className="min-h-screen bg-white text-gray-800 p-4"> */}
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/lessons/:id" element={<RequireAuth><LessonPage /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
