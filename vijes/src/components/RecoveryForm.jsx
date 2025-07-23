import { useState } from 'react';
import '../../public/auth.css';

const RecoveryForm = () => {
  const [recoveryData, setRecoveryData] = useState({
    email: '',
    securityAnswer: '',
    newPassword: '',
    confirmNewPassword: '',
    securityQuestion: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  const handleChange = (e) => {
    setRecoveryData({ ...recoveryData, [e.target.name]: e.target.value });
  };

  const handleGetSecurityQuestion = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setShowQuestion(false);
    try {
      const res = await fetch('https://calendly-18rn.onrender.com/auth/security-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: recoveryData.email })
      });
      const data = await res.json();
      if (data.success && data.question) {
        setRecoveryData((prev) => ({ ...prev, securityQuestion: data.question }));
        setShowQuestion(true);
        setMessage('');
      } else {
        setMessage(data.message || 'No se encontró la pregunta de seguridad');
      }
    } catch (err) {
      setMessage('Error de red');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    if (recoveryData.newPassword !== recoveryData.confirmNewPassword) {
      setMessage('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }
    try {
      const res = await fetch('https://calendly-18rn.onrender.com/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: recoveryData.email,
          securityAnswer: recoveryData.securityAnswer,
          newPassword: recoveryData.newPassword
        })
      });
      const data = await res.json();
      if (data.success) {
        setMessage('¡Contraseña actualizada! Ahora puedes iniciar sesión.');
      } else {
        setMessage(data.message || 'Error al actualizar la contraseña');
      }
    } catch (err) {
      setMessage('Error de red');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-modal-root auth-modal-full">
      <form className="auth-form" onSubmit={showQuestion ? handleResetPassword : handleGetSecurityQuestion}>
        <label>Email
          <input type="email" name="email" value={recoveryData.email} onChange={handleChange} required />
        </label>
        {!showQuestion && (
          <button type="submit" disabled={loading}>{loading ? 'Buscando...' : 'Buscar pregunta de seguridad'}</button>
        )}
        {showQuestion && (
          <>
            <label>Pregunta de seguridad
              <input type="text" name="securityQuestion" value={recoveryData.securityQuestion} disabled />
            </label>
            <label>Respuesta de seguridad
              <input type="text" name="securityAnswer" value={recoveryData.securityAnswer} onChange={handleChange} required />
            </label>
            <label>Nueva contraseña
              <input type="password" name="newPassword" value={recoveryData.newPassword} onChange={handleChange} required />
            </label>
            <label>Confirmar nueva contraseña
              <input type="password" name="confirmNewPassword" value={recoveryData.confirmNewPassword} onChange={handleChange} required />
            </label>
            <button type="submit" disabled={loading}>{loading ? 'Actualizando...' : 'Actualizar contraseña'}</button>
          </>
        )}
      </form>
      {message && <div className="auth-message">{message}</div>}
    </div>
  );
};

export default RecoveryForm; 