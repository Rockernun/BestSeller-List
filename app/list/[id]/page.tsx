import Link from "next/link";
import React from "react";
import IBooks, { API_URL } from "../../utils/BooksInterface";
import IBook from "../../utils/BooksInterface";

async function getBooks(id: string) {
  return fetch(`${API_URL}${id}`).then((response) => response.json());
}

export default async function Books({ params: { id } }) {
  const books: IBooks = await getBooks(id);
  return (
    <div>
      <h1>
        <ul>
          {books.results.books.map((book: IBook, index) => (
            <li key={index}>
              <img src={book.book_image} />
              <span>{book.title}</span>
              <span>{book.author}</span>
              <Link href={book.amazon_product_url} target={"_blank"}>
                <span>Buy Now! &rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </h1>
    </div>
  );
}
