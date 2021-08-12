import React from "react";

import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.copyRight}>
        This is a personal project for educational purpose.
        <br />
        All data retrieved from{" "}
        <a href="http://www.bom.gov.au/other/copyright.shtml">
          Bureau of Meteorology
        </a>
        . Thanks BOM!
      </span>
      <div>
        <div className={styles.signature}>© Seunghoon Ji (Jason)</div>
        <div className={styles.signature}>August 2021</div>
      </div>
    </div>
  );
}
