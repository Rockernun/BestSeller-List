//  Best Seller Page
import React from "react";
import Category from "../../components/category";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

//  All best seller lists API
export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getBestSeller() {
  return fetch(API_URL).then((response) => response.json());
}

export default async function Home() {
  const categories = await getBestSeller();
  return (
    <div className={styles.container}>
      {categories?.results.map((category, index: number) => (
        <Category key={index} list_name={category.list_name} />
      ))}
    </div>
  );
}
