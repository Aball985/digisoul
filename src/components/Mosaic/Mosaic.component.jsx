import styles from "./Mosaic.module.scss";
export default function Mosaic() {
  return (
    <div className={styles.mosaic}>
      <div class={styles.grid}>
        <div class={styles.tile}>
          <h1>Hats</h1>
          <button>Shop Now</button>
        </div>
        <div class={styles.tile}>
          <h1>Hats</h1>
          <button>Shop Now</button>
        </div>
        <div class={styles.tile}>
          <h1>Hats</h1>
          <button>Shop Now</button>
        </div>
        <div class={styles.tile}>
          <h1>Hats</h1>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}
