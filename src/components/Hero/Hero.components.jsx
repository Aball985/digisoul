import styles from "./Hero.module.scss";
import Video from "../../images/saber.mp4";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <video
        className={styles.video}
        loop
        autostart="true"
        autoPlay
        src={Video}
        type="video/mp4"
      />
      <div className={styles.hero__text}>
        <h1>
          A Techwear brand with <span className={styles.fancy}>Soul</span>
        </h1>
        <div className={styles.span__border}>
          <span>
            Wear the best in modern design, <br />
            from top designers all over the globe.
          </span>
        </div>
      </div>
    </div>
  );
}
