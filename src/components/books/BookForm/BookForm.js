import { useState } from "react";

import "./BookForm.css";

const BookForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  return (
    <form>
      <div className="new-book-controls">
        <div className="new-book-control">
          <label>Titulo</label>
          <input onChange={changeTitleHandler} type="text" />
        </div>
        <div className="new-book-control">
          <label>Autor</label>
          <input type="text" />
        </div>
        <div className="new-book-control">
          <label>Cantidad de Páginas</label>
          <input type="number" min="1" step="1" />
        </div>
        <div className="new-book-control">
          <label>¿Cuando terminaste de leerlo?</label>
          <input type="date" min="2019-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className="new-book-actions">
        <button type="submit">Agregar lectura</button>
      </div>
      <h4>{enteredTitle}</h4>
    </form>
  );
};

export default BookForm;
