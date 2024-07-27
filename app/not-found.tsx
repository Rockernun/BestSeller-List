import React from "react";
import styles from "../styles/layout.module.css";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return <h2 className={styles.title}>404 Not Found...</h2>;
}
