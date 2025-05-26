import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ children }) => {
  const { token } = useAuth();  
  const navigate = useNavigate();

  console.log("RequireAuth component rendered");
  console.log("Token:", token);
  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
    }
  }, [token, navigate]);

  console.log("Token:", token);

  if (!token) return null;
  return children;
};

export default RequireAuth;