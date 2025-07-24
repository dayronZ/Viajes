import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/loginForm.css';

const LoginForm = ({ onSuccess }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('https://calendly-18rn.onrender.com/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setMessage('¡Login exitoso!');
        onSuccess();
      } else {
        setMessage(data.message || 'Error al iniciar sesión');
      }
    } catch (err) {
      setMessage('Error de red');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form-wrapper">
      <div className="login-form-container">
        <form className="login-auth-form" onSubmit={handleLogin}>
          <h2 className="login-form-title">Iniciar Sesión</h2>
          
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              className="login-input"
              id="email"
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              className="login-input"
              id="password"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
            />
          </div>
          
          <button className="login-btn-submit" type="submit" disabled={loading}>
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
          
          {message && <div className={`login-auth-message ${message.includes('exitoso') ? 'success' : 'error'}`}>{message}</div>}
        </form>
      </div>

      <div className="login-links-container">
        <div className="login-auth-links">
          <div className="link-group">
            <span className="login-link-text">¿No tienes cuenta?</span>
            <button className="login-link-btn" type="button" onClick={() => navigate('/register')}>Regístrate</button>
          </div>
          
          <div className="link-group">
            <span className="login-link-text">¿Olvidaste tu contraseña?</span>
            <button className="login-link-btn" type="button" onClick={() => navigate('/recovery')}>Recuperar</button>
          </div>
          
          <div className="link-group">
            <button className="login-link-btn back-btn" type="button" onClick={() => navigate('/')}>
              <span className="back-arrow">←</span> Regresar al inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;