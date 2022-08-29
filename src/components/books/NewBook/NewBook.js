import { useState } from "react";

import "./NewBook.css";

import BookForm from "../BookForm/BookForm";

const NewBook = ({ saveBook }) => {
  const [showForm, setShowForm] = useState(false);

  const saveBookDataHandler = (bookData) => {
    const bookDataWithId = {
      ...bookData,
      id: Math.random().toString(),
    };

    saveBook(bookDataWithId);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="new-book">
      {showForm ? (
        <BookForm onCancel={handleCancel} saveBookData={saveBookDataHandler} />
      ) : (
        <button
          onClick={handleShowForm}
          className="new-book-actions"
          type="button"
        >
          Mostrar formulario
        </button>
      )}
    </div>
  );
};

export default NewBook;
