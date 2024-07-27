import Link from "next/link";
import React from "react";
import IBooks, { API_URL } from "../../utils/BooksInterface";
import IBook from "../../utils/BooksInterface";
import styles from "../../../styles/list.module.css";

async function getBooks(id: string) {
  return fetch(`${API_URL}${id}`).then((response) => response.json());
}

export default async function Books({ params: { id } }) {
  const books: IBooks = await getBooks(id);
  return (
    <div className={styles.container}>
      <h1 className={styles.lists}>{books.results.list_name} List</h1>
      <ul className={styles.list}>
        {books.results.books.map((book: IBook, index) => (
          <li className={styles.book} key={index}>
            <img src={book.book_image} />
            <span className={styles.title}>Title : {book.title}</span>
            <span className={styles.author}>Author : {book.author}</span>
            <Link href={book.amazon_product_url} target={"_blank"}>
              <span className={styles.buy}> Buy Now! &rarr;</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
