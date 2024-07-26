"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ICategories {
  list_name: string;
}

export default function Category({ list_name }: ICategories) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/lists/${Date.now()}`);
  };
  return (
    <div style={{ border: "3px solid black" }}>
      <Link href={`/lists/${list_name}`}>{list_name}</Link>
    </div>
  );
}
