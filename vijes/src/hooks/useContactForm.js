import { useState } from 'react';
import { apiService } from '../services/api.js';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const showNotification = (type, message) => {
    setNotification({
      show: true,
      type,
      message
    });
  };

  const hideNotification = () => {
    setNotification({
      show: false,
      type: '',
      message: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.destination || !formData.message) {
      showNotification('error', 'Por favor, completa todos los campos');
      return;
    }

    setIsSubmitting(true);
    showNotification('loading', 'Enviando formulario...');

    try {
      await apiService.submitContactForm(formData);
      showNotification('success', '¡Formulario enviado exitosamente! Redirigiendo a Calendly...');
      
      // Limpiar formulario después del éxito
      setFormData({
        name: '',
        email: '',
        destination: '',
        message: ''
      });
      
      // Redirigir a Calendly después de un breve delay
      setTimeout(() => {
        const calendlyLink = 'https://calendly.com/2022023-utsh/agenda-tu-vuelo';
        window.location.href = calendlyLink;
      }, 3000);
      
    } catch (error) {
      showNotification('error', 'Error al enviar el formulario. Por favor, intenta de nuevo.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    notification,
    handleInputChange,
    handleSubmit,
    hideNotification
  };
}; 