//  Navigation Bar Component
"use client";

import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";
import React from "react";
import Link from "next/link";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "✅" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "✅" : ""}
        </li>
      </ul>
    </nav>
  );
}
