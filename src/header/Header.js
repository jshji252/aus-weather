import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      Weather Of 'Straya
      <span className={styles.headerSpan}> ~ Don't Read, Just Look ~</span>
    </div>
  );
}
