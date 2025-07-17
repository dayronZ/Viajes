import React from 'react';

const FormStatus = ({ status, isSubmitting }) => {
  if (isSubmitting) {
    return (
      <div className="form-status submitting">
        <div className="loading-spinner"></div>
        <p>Enviando formulario...</p>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="form-status success">
        <p>¡Formulario enviado exitosamente! Redirigiendo a Calendly...</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="form-status error">
        <p>Error al enviar el formulario. Por favor, intenta de nuevo.</p>
      </div>
    );
  }

  return null;
};

export default FormStatus; 