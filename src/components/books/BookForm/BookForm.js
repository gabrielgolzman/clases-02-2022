import { useState } from "react";

import "./BookForm.css";

const BookForm = ({ saveBookData, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredPageCount, setEnteredPageCount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const changeAuthorHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const changePageCountHandler = (event) => {
    setEnteredPageCount(event.target.value);
  };

  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitBookHandler = () => {
    const bookData = {
      title: enteredTitle,
      author: enteredAuthor,
      pageCount: enteredPageCount,
      dateRead: new Date(enteredDate),
    };

    saveBookData(bookData);

    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredPageCount("");
    setEnteredDate("");
  };

  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <form>
      <div className="new-book-controls">
        <div className="new-book-control">
          <label>Titulo</label>
          <input
            value={enteredTitle}
            onChange={changeTitleHandler}
            type="text"
          />
        </div>
        <div className="new-book-control">
          <label>Autor</label>
          <input
            value={enteredAuthor}
            onChange={changeAuthorHandler}
            type="text"
          />
        </div>
        <div className="new-book-control">
          <label>Cantidad de Páginas</label>
          <input
            value={enteredPageCount}
            onChange={changePageCountHandler}
            type="number"
            min="1"
            step="1"
          />
        </div>
        <div className="new-book-control">
          <label>¿Cuando terminaste de leerlo?</label>
          <input
            value={enteredDate}
            onChange={changeDateHandler}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-book-actions">
        <button onClick={handleCancelClick} type="button">
          Cancelar
        </button>
        <button onClick={submitBookHandler} type="button">
          Agregar lectura
        </button>
      </div>
    </form>
  );
};

export default BookForm;
