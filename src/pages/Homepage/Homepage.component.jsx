import styles from "./Homepage.module.scss";
import Hero from "../../components/Hero/Hero.components";
import Mosaic from "../../components/Mosaic/Mosaic.component";
import Footer from "../../components/Footer/Footer.component";
import Showcase from "../../components/Showcase/Showcase.component";
export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <Hero />
      <Mosaic />
      <Showcase />
      <Footer />
    </div>
  );
}
