import { useState } from 'react'; 
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import RecoveryForm from './RecoveryForm';

const Auth = () => {
  const [activeForm, setActiveForm] = useState('login');

  return (
    <div className="auth-modal-full auth-modal-root">
      <div className="auth-tabs">
        <button className={activeForm === 'login' ? 'active' : ''} onClick={() => setActiveForm('login')}>Iniciar sesión</button>
        <button className={activeForm === 'register' ? 'active' : ''} onClick={() => setActiveForm('register')}>Registrarse</button>
        <button className={activeForm === 'recovery' ? 'active' : ''} onClick={() => setActiveForm('recovery')}>Recuperar</button>
      </div>

      {activeForm === 'login' && <LoginForm onSuccess={() => window.location.href = '/main'} setActiveForm={setActiveForm} />}
      {activeForm === 'register' && <RegisterForm setActiveForm={setActiveForm} />}
      {activeForm === 'recovery' && <RecoveryForm setActiveForm={setActiveForm} />}
    </div>
  );
};

export default Auth;
