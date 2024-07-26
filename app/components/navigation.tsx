//  Navigation Bar Component
"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
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
