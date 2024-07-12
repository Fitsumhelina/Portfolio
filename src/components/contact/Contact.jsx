import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { Box } from '@mui/material';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Email sent successfully');
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000); // Clear submitted message after 3 seconds
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              required
              name="name"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              required
              name="email"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">How Can I Help You?</label>
            <textarea
              required
              cols="50"
              rows="6"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
            />
          </div>
          <button type="submit" className={styles.formSubmitBtn}>
            Submit
          </button>
          {submitted && <p className={styles.successMessage}>Message sent successfully!</p>}
        </form>
      </div>
      <Box
        display={"flex"}
        gap={"1.5rem"}
        justifyContent={"center"}
        fontSize={{ xs: "1.2rem", md: "1.5rem" }}
        marginTop={"50px"}
      > 
        <div className={styles.icon}>
          <a href="https://www.instagram.com/your-instagram-profile/" ><img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="Github" /></a>
          <a href="https://www.twitter.com/your-twitter-profile/"><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="Linkedin" /></a>
          <a href="https://www.facebook.com/your-facebook-profile/"><img src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" alt="Telegram" /></a>
          <a href="https://www.facebook.com/your-facebook-profile/"><img src="https://cdn-icons-png.flaticon.com/128/15707/15707820.png" alt="Whatsapp" /></a>
        </div>
      </Box>
    </>
  );
}
