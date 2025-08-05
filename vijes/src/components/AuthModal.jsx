import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';
import RecoveryForm from './RecoveryForm.jsx';

const AuthModal = () => {
  const openWindow = (tab) => {
    let url = '';
    switch(tab) {
      case 'login':
        url = '/login.html';
        break;
      case 'register':
        url = '/register.html';
        break;
      case 'recovery':
        url = '/recovery.html';
        break;
      default:
        url = '/login.html';
    }
    window.open(url, '_blank', 'width=500,height=700');
  };

  return (
    <div className="auth-modal-root auth-modal-full">
      <div className="auth-tabs">
        <button onClick={() => openWindow('login')}>Login</button>
        <button onClick={() => openWindow('register')}>Registro</button>
        <button onClick={() => openWindow('recovery')}>Recuperar Contraseña</button>
      </div>
      <style>{`
        .auth-modal-full {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          z-index: 3000;
        }
        .auth-modal-root { font-family: 'Segoe UI', Arial, sans-serif; }
        .auth-tabs { display: flex; justify-content: center; margin-bottom: 2.5rem; gap: 0.5rem; }
        .auth-tabs button { background: #fff; border: none; padding: 12px 36px; cursor: pointer; font-weight: bold; border-radius: 10px 10px 0 0; font-size: 1.1rem; color: #222; box-shadow: 0 2px 8px rgba(0,0,0,0.07); transition: background 0.2s, color 0.2s; }
        .auth-tabs button.active { background: #222; color: #fff; }
        @media (max-width: 600px) {
          .auth-tabs button { padding: 10px 10px; font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default AuthModal; 