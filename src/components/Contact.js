import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Contact = ({ data, isActive, articleTimeout, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const close = <div className="close" onClick={onClose}></div>

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.error });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitStatus(null);
  };

  return (
    <article 
      id="contact" 
      className={`${isActive ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`} 
      style={{display:'none'}}
    >
      <h2 className="major">{data.title}</h2>
      
      {submitStatus && (
        <div className={`status-message ${submitStatus.type}`} style={{
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '4px',
          backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
          color: submitStatus.type === 'success' ? '#155724' : '#721c24',
          border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea 
            name="message" 
            id="message" 
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
            minLength="10"
            disabled={isSubmitting}
          ></textarea>
        </div>
        <ul className="actions">
          <li>
            <input 
              type="submit" 
              value={isSubmitting ? "Sending..." : "Send Message"} 
              className="special" 
              disabled={isSubmitting}
            />
          </li>
          <li>
            <input 
              type="button" 
              value="Reset" 
              onClick={handleReset}
              disabled={isSubmitting}
            />
          </li>
        </ul>
      </form>
      
      <ul className="icons">
        {data.socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} className={`icon ${link.icon}`} target="_blank" rel="noopener noreferrer">
              <span className="label">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
      {close}
    </article>
  )
}

Contact.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    socialLinks: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })).isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  articleTimeout: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Contact