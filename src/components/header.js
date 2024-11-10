import styles from "../assets/header.module.css";
import subtractImage from "../pictures/Subtract (1).png";
import FacebookAlt from "../pictures/Facebook Alt.png";
import InstagramAlt from "../pictures/Instagram Alt.png";
import TwitterAlt from "../pictures/Twitter Alt.png";

        const Header = () => {  
            return (
              <header className={styles.header}> 
                <div className={styles.header_icon}>
                  <div className={styles.icon_box}>
                    <div className={styles.icon_step}>
                      <img className={styles.step_img} src={subtractImage} alt=""/>
                      <p className={styles.icon_text}>Vijay Singh</p>
                    </div>
                    <div className={styles.icon_word}>
                      <p>Portfolio</p>
                      <p>Story</p>
                      <p>Contact</p>
                      <p>Career</p>
                      <p>Skillset</p>
                    </div>
                  </div>
                  <div className={styles.icon_market}>
                    <img className={styles.icon_mart} src={FacebookAlt} alt=""/>
                    <img className={styles.icon_mart} src={InstagramAlt} alt=""/>
                    <img className={styles.icon_mart} src={TwitterAlt} alt=""/>
                  </div>
                </div>
              </header>
            );
          }
          
          export default Header; 
    

