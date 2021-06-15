import styles from "./Links.module.scss";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className={styles.links}>
      <div className={styles.tile}>
        <h2>About Digisoul</h2>
        <Link>About Digisoul</Link>
        <Link>Careers</Link>
        <Link>Digisoul Social Impact</Link>
        <Link>Affiliates</Link>
        <Link>Supply Chain Transparency</Link>
        <Link>Sitemap</Link>
        <Link>Digisoul Global Sites</Link>
      </div>
      <div className={styles.tile}>
        <h2>My Digisoul</h2>
        <Link>About Digisoul</Link>
        <Link>Careers</Link>
        <Link>Digisoul Social Impact</Link>
        <Link>Affiliates</Link>
        <Link>Supply Chain Transparency</Link>
        <Link>Sitemap</Link>
        <Link>Digisoul Global Sites</Link>
      </div>
      <div className={styles.tile}>
        <h2>Help & FAQs</h2>
        <Link>About Digisoul</Link>
        <Link>Careers</Link>
        <Link>Digisoul Social Impact</Link>
        <Link>Affiliates</Link>
        <Link>Supply Chain Transparency</Link>
        <Link>Sitemap</Link>
        <Link>Digisoul Global Sites</Link>
      </div>
      <div className={styles.tile}>
        <h2>Ways to Shop</h2>
        <Link>About Digisoul</Link>
        <Link>Careers</Link>
        <Link>Digisoul Social Impact</Link>
        <Link>Affiliates</Link>
        <Link>Supply Chain Transparency</Link>
        <Link>Sitemap</Link>
        <Link>Digisoul Global Sites</Link>
      </div>
    </div>
  );
}
