import React, { useState } from 'react';
import styles from './Contact.module.scss';
import SocialIcon from "./SocialIcon";
import { info } from "../../info/Info";
import { Box } from '@mui/material';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, textarea }),
      });
      if (response.ok) {
        console.log('Email sent successfully');
        setSubmitted(true);
        setEmail('');
        setTextarea('');
        setTimeout(() => setSubmitted(false), 3000); // Clear submitted message after 3 seconds
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              required
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea
              required
              cols="50"
              rows="6"
              id="textarea"
              name="textarea"
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
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
        fontSize={{ xs: "2rem", md: "2.5rem" }}
      >
        <h1>icon here</h1>
        {info.socials.map((social, index) => (
          <SocialIcon
            key={index}
            link={social.link}
            icon={social.icon}
            label={social.label}
          />
        ))}
        <h3>iconend</h3>
      </Box>
    </>
  );
}
