import React from "react";
import styles from"../assets/container.module.css"; 

const Container = () => {
  return (
    <div className={styles.container}>
      <p className={styles.container_text}>Need an illustration or have an idea for a website?</p>
      <p className={styles.container_min}>Simply get in touch and tell me all about it.</p>
      <button className={styles.container_button}>Contact us</button>
      <hr />
    </div>
  );
};

export default Container;
