import styles from "./Navbar.module.scss";
import {
  RiSearchLine,
  RiShoppingCartLine,
  GiHamburgerMenu,
} from "react-icons/all";
import { Link } from "react-router-dom";

export default function Navbar() {
  const handleMobileClick = () => {
    console.log("CLicked");
  };
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">Digisoul</Link>
        </div>

        {/* Text Links */}
        <div className={styles.nav__links}>
          <Link to="/all">All</Link>
          <Link to="/jackets">Jackets</Link>
          <Link to="/hoodies">Hoodies</Link>
          <Link to="/misc">Misc</Link>
          <a href="/#">
            <strong>Sign In</strong>
          </a>
        </div>

        {/* Items */}
        <div className={styles.nav__items}>
          <div className={styles.nav__item}>
            <RiSearchLine />
            <p>Search</p>
          </div>
          <div className={styles.nav__item}>
            <RiShoppingCartLine />
            <p>Cart</p>
          </div>
          <div className={styles.nav__mobile} onClick={handleMobileClick}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
