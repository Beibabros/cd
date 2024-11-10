import React from "react";
import ex1 from "../pictures/Subtract (1).png";
import ex2 from "../pictures/Union.png";
import ex3 from "../pictures/shape.png";
import ex4 from "../pictures/shape (1).png"; 
import styles from "../assets/content.module.css";

const Content = () => {
  return (
    <div className={styles.content}>
      <p className={styles.content_p}>I’m trusted by the best in the industry.</p>
      <div className={styles.content_exall}>
        <div className={styles.content_ex}>
          <img className={styles.ex_1} src={ex1} alt="" />
          <p>Beehive</p>
        </div>
        <div className={styles.content_ex}>
          <img className={styles.ex_1} src={ex2} alt="" />
          <p>Chemistry</p>
        </div>
        <div className={styles.content_ex}>
          <img className={styles.ex_1} src={ex3} alt="" />
          <p>Looksmart</p>
        </div>
        <div className={styles.content_ex}>
          <img className={styles.ex_3} src={ex4} alt="" />
          <p>Cloud</p>
        </div>
      </div>
    </div>
  );
};

export default Content;