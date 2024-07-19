import React from 'react';
import styles from './ContactMe.module.scss';

const ContactMe = () => {
  return (
    <div className={styles.contactMe}>
      <h1>Contact <span>Me</span></h1>
      <div className={styles.info}>
        <div className={styles.item}>
          <p>📍 Location</p>
          <p>Addis Ababa, Ethiopia</p>
        </div>
        <div className={styles.item}>
          <p>✉️ Email</p>
          <p>dev.fitsum@gmail.com</p>
        </div>
        <div className={styles.item}>
          <p>📞 Phone Number</p>
          <p>+251-904-377-900</p>
        </div>
        <div className={styles.item}>
          <p>🎓 Education</p>
          <p>Debre Berhan University, Ethiopia</p>
        </div>
        <div className={styles.item}>
          <p>🗣️ Languages</p>
          <p>Amharic, English</p>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://github.com/Fitsumhelina" ><img src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="Github" /></a>
          <a href="https://www.linkedin.com/in/fitsum-helina-57164828a/"><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="Linkedin" /></a>
          <a href="https://t.me/fitsumhelina"><img src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" alt="Telegram" /></a>
          <a href="https://wa.me/251904377900"><img src="https://cdn-icons-png.flaticon.com/128/15707/15707820.png" alt="Whatsapp" /></a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
