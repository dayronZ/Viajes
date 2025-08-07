import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/RecoveryForm.css';
import './loginCard.css'; // Asegúrate de tener esta ruta

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
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecoveryData({ ...recoveryData, [name]: value });
    
    // Calcular fuerza de la contraseña
    if (name === 'newPassword') {
      let strength = 0;
      if (value.length > 5) strength += 25;
      if (value.length > 7) strength += 25;
      if (/[A-Z]/.test(value)) strength += 25;
      if (/[0-9!@#$%^&*]/.test(value)) strength += 25;
      setPasswordStrength(strength);
    }
  };

  const handleGetSecurityQuestion = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('https://calendly-18rn.onrender.com/user/security-question', {
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

    const { email, securityAnswer, newPassword, confirmNewPassword } = recoveryData;

    if (newPassword !== confirmNewPassword) {
      setMessage('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    if (passwordStrength < 75) {
      setMessage('La contraseña es demasiado débil. Intenta con una más segura.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('https://calendly-18rn.onrender.com/user/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, securityAnswer, newPassword })
      });
      const data = await res.json();
      if (data.success) {
        setMessage('¡Contraseña actualizada! Redirigiendo al login...');
        setTimeout(() => navigate('/login'), 2000);
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
    <div className="recovery-modal-root">

        <div className="recovery-form-container">
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
      
      <div className="recovery-links">
        <form
          className="recovery-form"
          onSubmit={showQuestion ? handleResetPassword : handleGetSecurityQuestion}
        >
          <a className="recovery-link" onClick={() => navigate('/login')}>
            Regresar
          </a>
          <h2 className="recovery-form-title">Reestablecer contraseña</h2>
          
          <div className="recovery-step">
            <p>Ingresa tu correo electrónico para buscar tu pregunta de seguridad asociada a tu cuenta</p>
            <label className="recovery-label">
              
              <input
                className="recovery-input"
                type="email"
                name="email"
                value={recoveryData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </label>
            
            {!showQuestion && (
              <button className="recovery-btn" type="submit" disabled={loading}>
                {loading ? 'Comprobando...' : 'Comprobar'}
              </button>
            )}
          </div>
          
          {showQuestion && (
            <div className="recovery-step">
              <label className="recovery-label">
                Pregunta de seguridad
                <input
                  className="recovery-input"
                  type="text"
                  name="securityQuestion"
                  value={recoveryData.securityQuestion}
                  disabled
                />
              </label>
              
              <label className="recovery-label">
                Respuesta de seguridad
                <input
                  className="recovery-input"
                  type="text"
                  name="securityAnswer"
                  value={recoveryData.securityAnswer}
                  onChange={handleChange}
                  required
                  placeholder="Tu respuesta a la pregunta"
                />
              </label>
              
              <label className="recovery-label">
                Nueva contraseña
                <input
                  className="recovery-input"
                  type="password"
                  name="newPassword"
                  value={recoveryData.newPassword}
                  onChange={handleChange}
                  required
                  placeholder="Mínimo 8 caracteres"
                />
                <div className="password-strength">
                  <div 
                    className="password-strength-meter" 
                    style={{ width: `${passwordStrength}%` }}
                  ></div>
                </div>
              </label>
              
              <label className="recovery-label">
                Confirmar nueva contraseña
                <input
                  className="recovery-input"
                  type="password"
                  name="confirmNewPassword"
                  value={recoveryData.confirmNewPassword}
                  onChange={handleChange}
                  required
                  placeholder="Vuelve a escribir tu contraseña"
                />
              </label>
              
              <button className="recovery-btn" type="submit" disabled={loading}>
                {loading ? 'Guardando...' : 'Guardar'}
              </button>
            </div>
          )}
        </form>
        
        {message && (
          <div className={`recovery-message ${message.includes('actualizada') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecoveryForm;