import { useState, useEffect } from "react";

import "./BookItem.css";

import ReadDate from "../ReadDate/ReadDate";
import BookCard from "../../ui/BookCard/BookCard";

const BookItem = ({ title, author, dateRead, pageCount }) => {
  const [newTitle, setNewTitle] = useState(title);

  const clickHandler = () => {
    setNewTitle("Actualizado!");
    console.log(newTitle);
  };

  return (
    <>
      <BookCard>
        <h2>{newTitle}</h2>
        <h3>{author}</h3>
        { dateRead && <ReadDate dateRead={dateRead} /> }
        
        <p>{pageCount}</p>
        <button onClick={clickHandler}>Cambiar titulo</button>
      </BookCard>
    </>
  );
};

export default BookItem;
