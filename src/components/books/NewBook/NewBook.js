import "./NewBook.css";

import BookForm from "../BookForm/BookForm";

const NewBook = ({ saveBook }) => {
  const saveBookDataHandler = (bookData) => {
    const bookDataWithId = {
      ...bookData,
      id: Math.random().toString(),
    };

    saveBook(bookDataWithId);
  };

  return (
    <div className="new-book">
      <BookForm saveBookData={saveBookDataHandler} />
    </div>
  );
};

export default NewBook;
