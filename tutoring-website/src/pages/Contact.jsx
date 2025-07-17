// src/pages/Contact.jsx
import { useState } from 'react';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Message sent! We will contact you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-container">
      <section className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Email: info@email.co.za</p>
              <p>Phone: +27 xx xxx xxxx</p>
              <p>Operating Hours:</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;