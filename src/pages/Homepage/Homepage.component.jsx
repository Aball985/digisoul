import styles from "./Homepage.module.scss";
import Hero from "../../components/Hero/Hero.components";
import Mosaic from "../../components/Mosaic/Mosaic.component";
export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <Hero />
      <Mosaic />
    </div>
  );
}
