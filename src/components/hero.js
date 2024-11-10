import styles from "../assets/hero.module.css";
import ProfilePhoto from "../pictures/Profile Photo.png";
const Hero = () => {
return (
<div class="hero">
        <div className={styles.hero_main}>
            <div class={styles.main_column}>
                <h1 class={styles.column_font}>Hi, introdusing me, a Digital artist</h1>
                    <p class={styles.column_text}>Illustrator and designer extraordinaire, please browse my works and let’s talk.</p>
                <button class={styles.column_button}>My portfolia</button>
            </div>
                <img className={styles.main_img} src={ProfilePhoto} alt=""/>

        </div>

    </div>
);
}
export default Hero;