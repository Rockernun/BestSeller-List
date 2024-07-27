//  Best Seller Page
import React from "react";
import styles from "../../styles/home.module.css";
import Link from "next/link";

export const metadata = {
  title: "Home",
};

//  All best seller lists API
export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getBestSeller() {
  return fetch(API_URL).then((response) => response.json());
}

interface ICategories {
  status: string;
  copyright: string;
  num_results: number;
  results: [];
}

interface ICategory {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
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
