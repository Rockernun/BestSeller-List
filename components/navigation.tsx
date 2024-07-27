"use client";

import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";
import React from "react";
import Link from "next/link";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={path === "/" ? styles.active : ""}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={path === "/about" ? styles.active : ""}>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
