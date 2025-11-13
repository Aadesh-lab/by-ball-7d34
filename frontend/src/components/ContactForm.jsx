import React, { useState } from 'react';
import { Send, User, Mail, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    location: '',
    message: '',
    inquiryType: 'general'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'reservation', label: 'Reservation/Event' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'catering', label: 'Catering Services' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'complaint', label: 'Complaint' }
  ];

  const locations = [
    { value: '', label: 'Select a location' },
    { value: 'covent-garden', label: 'Covent Garden' },
    { value: 'shoreditch', label: 'Shoreditch' },
    { value: 'camden', label: 'Camden' },
    { value: 'any', label: 'Any Location' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Connect to the backend API when ready.
      // const response = await fetch('http://localhost:8000/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      // 
      // if (!response.ok) {
      //   throw new Error('Failed to send message');
      // }
      // 
      // const result = await response.json();
      // console.log('Form submitted successfully:', result);

      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        location: '',
        message: '',
        inquiryType: 'general'
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg border border-green-200 p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Message Sent Successfully!</h3>
          <p className="text-green-700 mb-6">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white to-stone-50 rounded-xl shadow-lg border border-stone-200">
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Get in Touch</h2>
          <p className="text-green-700">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-green-800 font-semibold mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                  errors.name ? 'border-red-300 bg-red-50' : 'border-green-200 bg-white'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-green-800 font-semibold mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                  errors.email ? 'border-red-300 bg-red-50' : 'border-green-200 bg-white'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-green-800 font-semibold mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                  errors.phone ? 'border-red-300 bg-red-50' : 'border-green-200 bg-white'
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-green-800 font-semibold mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Preferred Location
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white transition-all duration-200"
              >
                {locations.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-green-800 font-semibold mb-2">
                Inquiry Type
              </label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white transition-all duration-200"
              >
                {inquiryTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-green-800 font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                  errors.subject ? 'border-red-300 bg-red-50' : 'border-green-200 bg-white'
                }`}
                placeholder="Brief subject of your message"
              />
              {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject}</p>}
            </div>
          </div>

          <div>
            <label className="block text-green-800 font-semibold mb-2">
              <MessageCircle className="w-4 h-4 inline mr-2" />
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-vertical ${
                errors.message ? 'border-red-300 bg-red-50' : 'border-green-200 bg-white'
              }`}
              placeholder="Tell us how we can help you..."
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            <p className="text-green-600 text-sm mt-1">
              {formData.message.length}/500 characters
            </p>
          </div>

          {errors.submit && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-600 text-sm">{errors.submit}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
              isSubmitting
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700 transform hover:-translate-y-0.5'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-green-200">
          <div className="text-center">
            <p className="text-green-600 text-sm mb-4">
              Prefer to contact us directly? Here are other ways to reach us:
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-green-600" />
                <span className="text-green-700">+44 20 7123 4567</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-green-600" />
                <span className="text-green-700">hello@brewandbliss.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="text-green-700">Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;