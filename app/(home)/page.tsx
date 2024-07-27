//  Best Seller Page
import React from "react";
import styles from "../../styles/home.module.css";
import Link from "next/link";
import ICategories, { API_URL } from "../utils/HomeInterface";
import ICategory from "../utils/HomeInterface";

export const metadata = {
  title: "Home",
};

async function getBestSeller() {
  return fetch(API_URL).then((response) => response.json());
}

export default async function Home() {
  const categories: ICategories = await getBestSeller();
  return (
    <div className={styles.container}>
      <ul>
        {categories.results.map((list: ICategory, index) => (
          <Link key={index} prefetch href={`list/${list.list_name_encoded}`}>
            <li>{list.list_name} &rarr;</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
