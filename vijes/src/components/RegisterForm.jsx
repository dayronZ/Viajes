import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/register.css';

const RegisterForm = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    securityQuestion: '',
    securityAnswer: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    const { password, confirmPassword } = registerData;
    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('https://calendly-18rn.onrender.com/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData)
      });
      const data = await res.json();
      if (data.success) {
        setMessage('¡Registro exitoso! Redirigiendo...');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setMessage(data.message || 'Error al registrarse');
      }
    } catch (err) {
      setMessage('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  // Validación de contraseña
  const hasUpper = /[A-Z]/.test(registerData.password);
  const hasLower = /[a-z]/.test(registerData.password);
  const hasNumber = /[0-9]/.test(registerData.password);
  const hasMinLength = registerData.password.length >= 10;

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">UtshViajes</h1>
        <p className="auth-subtitle">Los mejores países a un precio de ensueño</p>
        <img src="/imageR.png" alt="Imagen" className="auth-image" />
        
        <form onSubmit={handleRegister} className="auth-form">
          {/* Email */}
          <div className="form-section">
            <h3 className="section-title">Email</h3>
            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              className="auth-input"
              required
            />

            <h3 className="section-title">Contraseña</h3>
            <input
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              className="auth-input"
              required
            />
            
            <h3 className="section-title">Confirmar Contraseña</h3>
            <input
              type="password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleChange}
              className="auth-input"
              required
            />
            
            <div className="password-rules">
              <p>La contraseña debe de tener al menos:</p>
              <ul>
                <li>1 mayúscula <span>{hasUpper ? '✓' : '0/1'}</span></li>
                <li>1 minúscula <span>{hasLower ? '✓' : '0/1'}</span></li>
                <li>1 número <span>{hasNumber ? '✓' : '0/1'}</span></li>
                <li>10 carácteres <span>{hasMinLength ? '✓' : `${registerData.password.length}/10`}</span></li>
              </ul>
            </div>

          </div>

          {/* Contraseña */}
          <div className="form-section">

            <h3 className="section-title">Nombre</h3>
            <input
              type="text"
              name="name"
              value={registerData.name}
              onChange={handleChange}
              className="auth-input"
              required
            />             


            <h3 className="section-title">Pregunta de seguridad</h3>
            <input
              type="text"
              name="securityQuestion"
              value={registerData.securityQuestion}
              onChange={handleChange}
              className="auth-input"
              required
            />
            
            <h3 className="section-title">Respuesta de seguridad</h3>
            <input
              type="text"
              name="securityAnswer"
              value={registerData.securityAnswer}
              onChange={handleChange}
              className="auth-input"
              required
            />

          </div>





          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>

        <div className="auth-footer">
          <button 
            onClick={() => navigate('/login')} 
            className="auth-link-button"
          >
            Ya tengo una cuenta
          </button>
        </div>

        {message && (
          <div className={`auth-message ${message.includes('éxito') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;