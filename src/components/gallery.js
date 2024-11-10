import React from "react";
import styles from "../assets/gallery.module.css"; 


import img1 from "../pictures/gallery-pic (3).png";
import img2 from "../pictures/gallery-pic (2).png";
import img3 from "../pictures/gallery-pic (1).png";
import img4 from "../pictures/gallery-pic.png";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.gallery_ex}>
        <img className={styles.ex_2} src={img1} alt="Koala time illustration" />
        <p>Koala time illustration</p>
      </div>
      <div className={styles.gallery_ex}>
        <img className={styles.ex_2} src={img2} alt="Wolf visits the city book" />
        <p>Wolf visits the city book</p>
      </div>
      <div className={styles.gallery_ex}>
        <img className={styles.ex_2} src={img3} alt="Cute tigers poster" />
        <p>Cute tigers poster</p>
      </div>
      <div className={styles.gallery_ex}>
        <img className={styles.ex_2} src={img4} alt="Safety crocodile plays games" />
        <p>Safety crocodile plays games</p>
      </div>
    </div>
  );
};

export default Gallery;