import React from "react";
import styles from "../../styles/layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>The New York Times Best Seller Explorer</h1>
      {children}
    </div>
  );
}
