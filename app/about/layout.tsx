import React from "react";
import styles from "../../styles/layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.title}>
      {children}
      &copy; NextJS is Awesome!
    </div>
  );
}
