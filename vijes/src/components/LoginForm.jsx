import { useState } from 'react';
import '../../public/auth.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('https://calendly-18rn.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });
      const data = await res.json();
      if (data.success) {
        setMessage('¡Login exitoso!');
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
    <div className="auth-modal-root auth-modal-full">
      <form className="auth-form" onSubmit={handleLogin}>
        <label>Email
          <input type="email" name="email" value={loginData.email} onChange={handleChange} required />
        </label>
        <label>Contraseña
          <input type="password" name="password" value={loginData.password} onChange={handleChange} required />
        </label>
        <button type="submit" disabled={loading}>{loading ? 'Ingresando...' : 'Ingresar'}</button>
        <div style={{ marginTop: '1.2rem', textAlign: 'center', fontSize: '0.98rem' }}>
          <span style={{ marginRight: 10 }}>
            ¿No tienes cuenta?{' '}
            <a href="#" onClick={e => { e.preventDefault(); window.open('/register', '_blank'); }} style={{ color: '#1976d2', textDecoration: 'underline', cursor: 'pointer' }}>Regístrate</a>
          </span>
          <span>
            <a href="#" onClick={e => { e.preventDefault(); window.open('/recovery', '_blank'); }} style={{ color: '#1976d2', textDecoration: 'underline', cursor: 'pointer' }}>¿Olvidaste tu contraseña?</a>
          </span>
        </div>
      </form>
      {message && <div className="auth-message">{message}</div>}
    </div>
  );
};

export default LoginForm; 