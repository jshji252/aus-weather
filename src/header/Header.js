import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      Weather Of 'Straya
      <span style={{ fontSize: 14, display: "inline-block", paddingLeft: 12 }}>
        {" "}
        ~ Don't Read, Just Look ~
      </span>
    </div>
  );
}
