import { useContext, useEffect, useState } from "react";

import "./NewBook.css";

import BookForm from "../BookForm/BookForm";
import AuthContext from "../../context/AuthContext";



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

  const currentUser = useContext(AuthContext);

  return (
    <div className="new-book">

      { showForm && currentUser?.role === 'admin' ? (
        <BookForm onCancel={handleCancel} saveBookData={saveBookDataHandler} />
      ) : (
        <button
          onClick={handleShowForm}
          className="new-book-actions"
          type="button"
        >
          { currentUser?.role === 'admin' ? 'Mostrar formulario' : 'Debes ser admin' }
        </button>
      )}
    </div>
  );
};

export default NewBook;
