import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/loginForm.css';
import './loginCard.css';

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
        <div className="card-container">
          <img
            src="/src/assets/loginCard.png" // O usa import si la imagen está en tu proyecto
            alt="París ilustración"
            className="card-image"
          />
          <div className="card-description">
            <ul>
              <li>Accede a precios accesibles</li>
              <li>Viaja a lugares icónicos</li>
              <li>Obtén la seguridad de viajar con nosotros</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="login-links-container">
      <form className="login-auth-form" onSubmit={handleLogin}>
          <h2 className="login-form-title">Inicia sesión</h2>
          
          <div className="input-group">
            
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
          <button className="login-link-btn" type="button" onClick={() => navigate('/recovery')}>¿Olvidaste tu contraseña?</button>
          
          <button className="login-btn-submit" type="submit" disabled={loading}>
            {loading ? 'Iniciando...' : 'Iniciar Sesión'}
          </button>
          <button className="login-link-btn" type="button" onClick={() => navigate('/register')}>No tengo una cuenta</button>

          
          
          {message && <div className={`login-auth-message ${message.includes('exitoso') ? 'success' : 'error'}`}>{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;