import React from "react";

import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <span></span>
      <div>
        <div className={styles.signature}>© Seunghoon Ji (Jason)</div>
        <div className={styles.signature}>August 2021</div>
      </div>
    </div>
  );
}
