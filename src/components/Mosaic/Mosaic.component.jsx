import styles from "./Mosaic.module.scss";

export default function Mosaic() {
  return (
    <div className={styles.mosaic}>
      <div className={styles.grid}>
        <div className={styles.tile}>
          <h1>Outerwear</h1>
          <button>Shop Now</button>
        </div>
        <div className={styles.tile}>
          <h1>Footwear</h1>
          <button>Shop Now</button>
        </div>
        <div className={styles.tile}>
          <h1>Catalog</h1>
          <button>Shop Now</button>
        </div>
        <div className={styles.tile}>
          <h1>Accessories</h1>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}
