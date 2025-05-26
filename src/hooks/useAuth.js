import { useState, useEffect } from 'react';

const useAuth = () => {
  const [token, setToken] = useState(() => localStorage.getItem('jwt'));
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: { email, password } }),
      });

      if (!res.ok) throw new Error('Invalid credentials');

      const data = await res.json();
      const jwt = res.headers.get('Authorization')?.split('Bearer ')[1];
      if (!jwt) throw new Error('Missing token in response');

      setToken(jwt);
      localStorage.setItem('jwt', jwt);
      setError(null);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('jwt');
  };

  return { token, login, logout, error };
}

export default useAuth;