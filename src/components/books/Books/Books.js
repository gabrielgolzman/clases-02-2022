import "./Books.css";

import BookItem from "../BookItem/BookItem";
import BooksFilter from "../../filter/BooksFilter";
import React, { useState } from "react";

import SettingsContext from "../../context/SettingsContext";

const Books = ({ books }) => {
  const [filterYear, setFilterYear] = useState("all");

  const yearChangedHandler = (year) => {
    setFilterYear(year);
  };

  const booksMapped = books
    .filter((book) =>
      filterYear === "all"
        ? books
        : book.dateRead.getFullYear() === parseInt(filterYear)
    )
    .map((book) => (
      <BookItem
        key={book.id}
        title={book.title}
        author={book.author}
        dateRead={book.dateRead}
        pageCount={book.pageCount}
      />
    ));

  return (
    <SettingsContext.Provider value={{ dateFormat: 'en-US' }}>
      <>
        <BooksFilter filterYear={filterYear} yearChanged={yearChangedHandler} />
        
        <div className="books-container">
          {booksMapped.length === 0 ? (
            <p>No hay libros registrados en {filterYear}</p>
          ) : (
            booksMapped
          )}

          {/* {books.map((item) => (
            <BookItem
              title={item.title}
              author={item.author}
              dateRead={item.dateRead}
              pageCount={item.pageCount}
            />
          ))} */}
        </div>
      </>
    </SettingsContext.Provider>
  );
};

export default Books;
