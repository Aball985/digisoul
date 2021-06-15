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
  AiFillCaretRight,
} from "react-icons/all";
import Links from "../Links/Links.component";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h1>Links</h1>
      <hr className={styles.line} />
      <Links />
      <hr className={styles.line} />
      <div className={styles["newsletter"]}>
        <div className={styles.email}>
          <span>Sign up for Digisoul Emails</span>
          <div className={styles["email-input"]}>
            <input type="email" placeholder="Email" id="" />
            <button>
              <AiFillCaretRight />
            </button>
          </div>
        </div>
        <div className={styles["social-media"]}>
          <a href="http://facebook.com">
            <GrFacebook className={styles.icon} />
          </a>
          <a href="http://twitter.com">
            <GrTwitter className={styles.icon} />
          </a>
          <a href="http://instagram.com">
            <GrInstagram className={styles.icon} />
          </a>
          <a href="http://youtube.com">
            <GrYoutube className={styles.icon} />
          </a>
          <a href="http://pinterest.com">
            <GrPinterest className={styles.icon} />
          </a>
          <a href="http://tiktok.com">
            <IoLogoTiktok className={styles.icon} />
          </a>
          <a href="http://snapchat.com">
            <GrSnapchat className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>
          Copyright © {new Date().getFullYear()} USA, Inc. All rights reserved
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
        </span>
        <span>1-877-DIGISOUL (1-877-737-4672) | TTY (1-888-866-9845)</span>
      </div>
    </div>
  );
}
