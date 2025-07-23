import { useState } from 'react';
import '../../public/auth.css';

const RegisterForm = () => {
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    securityQuestion: '',
    securityAnswer: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    if (registerData.password !== registerData.confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }
    try {
      const res = await fetch('https://calendly-18rn.onrender.com/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: registerData.email,
          password: registerData.password,
          securityQuestion: registerData.securityQuestion,
          securityAnswer: registerData.securityAnswer
        })
      });
      const data = await res.json();
      if (data.success) {
        setMessage('¡Registro exitoso! Ahora puedes iniciar sesión.');
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
    <div className="auth-modal-root auth-modal-full">
      <form className="auth-form" onSubmit={handleRegister}>
        <label>Email
          <input type="email" name="email" value={registerData.email} onChange={handleChange} required />
        </label>
        <label>Contraseña
          <input type="password" name="password" value={registerData.password} onChange={handleChange} required />
        </label>
        <label>Confirmar Contraseña
          <input type="password" name="confirmPassword" value={registerData.confirmPassword} onChange={handleChange} required />
        </label>
        <label>Pregunta de seguridad
          <input type="text" name="securityQuestion" value={registerData.securityQuestion} onChange={handleChange} required />
        </label>
        <label>Respuesta de seguridad
          <input type="text" name="securityAnswer" value={registerData.securityAnswer} onChange={handleChange} required />
        </label>
        <button type="submit" disabled={loading}>{loading ? 'Registrando...' : 'Registrarse'}</button>
      </form>
      {message && <div className="auth-message">{message}</div>}
    </div>
  );
};

export default RegisterForm; 