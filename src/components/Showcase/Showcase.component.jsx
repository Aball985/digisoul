import React from "react";
import styles from "./Showcase.module.scss";
import logo from "../../images/nike-acg.svg";

export default function Showcase() {
  return (
    <div className={styles.container}>
      <div className={styles.showcase}>
        <div className={styles["showcase-text"]}>
          <h1>Brands</h1>
          <span>In collaboration with top brands</span>
        </div>
        <div className={styles.grid}>
          <img src={logo} alt="nike-acg" />
          <img src={logo} alt="nike-acg" />
          <img src={logo} alt="nike-acg" />
          <img src={logo} alt="nike-acg" />
          <img src={logo} alt="nike-acg" />
          <img src={logo} alt="nike-acg" />
        </div>
      </div>
    </div>
  );
}
