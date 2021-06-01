import React from "react";
import styles from "./Footer.module.scss";
import {
  GrFacebook,
  GrTwitter,
  GrPinterest,
  GrYoutube,
  GrInstagram,
  IoLogoTiktok,
  GrSnapchat,
} from "react-icons/all";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <h1>Links</h1>
      </div>
      <hr className={styles.line} />
      <div className={styles["newsletter"]}>
        <div className="email">
          <span>Sign up for Digisoul Emails</span>
          <input type="email" placeholder="Email" id="" />
        </div>
        <div className={styles["social-media"]}>
          <a href="http://facebook.com">
            <GrFacebook className={styles.icon} />
          </a>
          <a href="http://twitter.com">
            <GrTwitter />
          </a>
          <a href="http://instagram.com">
            <GrInstagram />
          </a>
          <a href="http://youtube.com">
            <GrYoutube />
          </a>
          <a href="http://pinterest.com">
            <GrPinterest />
          </a>
          <a href="http://tiktok.com">
            <IoLogoTiktok />
          </a>
          <a href="http://snapchat.com">
            <GrSnapchat />
          </a>
        </div>
      </div>
    </div>
  );
}
