import React from "react";
import styles from"../assets/footer.module.css"; // Импортируем стили

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_p}>© 2023, Vijay Singh Design. All Rights Reserved.</p>
      <div className={styles.footer_text}>
        <p className={styles.footer_p}>Privacy</p>
        <p className={styles.footer_p}>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
