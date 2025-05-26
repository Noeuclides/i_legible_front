import { useState } from 'react';
import useAuth from '../hooks/useAuth';

export default function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success && onLoginSuccess) onLoginSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-xl font-hand">Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border rounded-xl font-hand"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 border rounded-xl font-hand"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600 transition font-hand"
      >
        Login
      </button>
    </form>
  );
}
