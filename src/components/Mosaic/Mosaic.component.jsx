import styles from "./Mosaic.module.scss";
export default function Mosaic() {
  return (
    <div className={styles.mosaic}>
      <div className={styles.grid}>
        <div className={styles.tile}>
          <h1>4</h1>
          <button>Shop Now</button>
        </div>
        <div className={styles.tile}>
          <h1>3</h1>
          <button>Shop Now</button>
        </div>
        <div className={styles.tile}>
          <h1>1</h1>
          <button>Shop Now</button>
        </div>
        <div className={styles.tile}>
          <h1>2</h1>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}
