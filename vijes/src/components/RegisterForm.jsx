import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    const { name, email, password, confirmPassword, securityQuestion, securityAnswer } = registerData;

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('https://calendly-18rn.onrender.com/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, securityQuestion, securityAnswer })
      });
      const data = await res.json();
      if (data.success) {
        setMessage('¡Registro exitoso! Ahora puedes iniciar sesión.');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setMessage(data.message || 'Error al registrarse');
      }
    } catch (err) {
      setMessage('Error de red');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-modal-root register-modal-full">
      <form className="register-form" onSubmit={handleRegister}>
        <label className="register-label">
          Nombre
          <input
            className="register-input"
            type="text"
            name="name"
            value={registerData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="register-label">
          Email
          <input
            className="register-input"
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className="register-label">
          Contraseña
          <input
            className="register-input"
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label className="register-label">
          Confirmar Contraseña
          <input
            className="register-input"
            type="password"
            name="confirmPassword"
            value={registerData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <label className="register-label">
          Pregunta de seguridad
          <input
            className="register-input"
            type="text"
            name="securityQuestion"
            value={registerData.securityQuestion}
            onChange={handleChange}
            required
          />
        </label>
        <label className="register-label">
          Respuesta de seguridad
          <input
            className="register-input"
            type="text"
            name="securityAnswer"
            value={registerData.securityAnswer}
            onChange={handleChange}
            required
          />
        </label>
        <button className="register-btn" type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrarse'}
        </button>
      </form>
      {message && <div className="register-message">{message}</div>}
    </div>
  );
};

export default RegisterForm;
