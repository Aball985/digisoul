import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
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
