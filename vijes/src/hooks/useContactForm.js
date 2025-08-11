import { useState } from 'react';
import { apiService } from '../services/api.js';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: '',
    date: '', // nuevo campo
    time: '', // nuevo campo
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
    if (!formData.name || !formData.email || !formData.destination || !formData.message || !formData.date || !formData.time) {
      showNotification('error', 'Por favor, completa todos los campos');
      return;
    }

    setIsSubmitting(true);
    showNotification('loading', 'Enviando formulario...');

    try {
      await apiService.submitContactForm(formData);
      showNotification('success', '¡Formulario enviado exitosamente! Abriendo Calendly en nueva pestaña...');
      
      // Limpiar formulario después del éxito
      setFormData({
        name: '',
        email: '',
        destination: '',
        message: '',
        date: '',
        time: '',
      });
      
      // Abrir Calendly en nueva pestaña después de un breve delay con fecha/hora y prefill de nombre/email
      setTimeout(() => {
        let calendlyLink = 'https://calendly.com/2022023-utsh/agenda-tu-vuelo';
        if (formData.date && formData.time) {
          // Combinar fecha y hora, y forzar zona horaria -05:00
          const [year, month, day] = formData.date.split('-');
          const [hour, min] = formData.time.split(':');
          const calendlyDateTime = `${year}-${month}-${day}T${hour}:${min}:00-05:00`;
          calendlyLink += `/${calendlyDateTime}?month=${year}-${month}&date=${year}-${month}-${day}`;
          calendlyLink += `&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`;
        }
        window.open(calendlyLink, '_blank');
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