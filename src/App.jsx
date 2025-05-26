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
    <div className="">
      <div className="text-3xl bg-red-200 p-4">If this is red, Tailwind works</div>
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
