import "./BookItem.css";

import ReadDate from "../ReadDate/ReadDate";
import BookCard from "../../ui/BookCard/BookCard";

const BookItem = ({ title, author, dateRead, pageCount }) => {
  return (
    <>
      <BookCard>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <ReadDate dateRead={dateRead} />
        <p>{pageCount}</p>
      </BookCard>
    </>
  );
};

export default BookItem;
