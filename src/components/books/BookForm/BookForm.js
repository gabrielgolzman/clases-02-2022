import { useContext, useRef, useState } from "react";

import SettingsContext from "../../context/SettingsContext";

import "./BookForm.css";

const BookForm = ({ saveBookData, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [errors, setErrors] = useState({});
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredPageCount, setEnteredPageCount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [coverImage, setCoveredImage] = useState("");
  const fileInput = useRef(null);
  const pageCountInputRef = useRef(null);

  const theme = useContext(SettingsContext);

  const changeTitleHandler = (event) => {
    const errorsValidation = validateBook({ title: event.target.value });
    console.log('errorsValidation title: ', errorsValidation);
    setErrors({...errors, title: errorsValidation.title });
    setEnteredTitle(event.target.value);
  };



  const onAuthorInputBlur = (event) => {
    if (enteredAuthor === '') {
      setErrors({ ...errors, author: 'Campo obligatorio.'});
    } else if (enteredAuthor.length < 2) {
      setErrors({ ...errors, author: 'El nombre del autor debe tener al menos 2 letras.'});
    } else {
      let _errors = { ...errors };
      delete _errors.author;
      setErrors(_errors);
    }
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

  const validateBook = (bookData) => {

    let errorsValidation = { ...errors };

    if (!(!isNaN(Number(bookData.pageCount)) && Number(bookData.pageCount) > 0)) {
      errorsValidation = { ...errorsValidation, pageCount: 'Debe ser mayor a cero.' };
    } else {
      delete errorsValidation.pageCount;
    }

    if (bookData.title === '') {
      errorsValidation = { ...errorsValidation, title: 'Campo obligatorio.'};
    } else if (bookData.title.length < 3) {
      errorsValidation = { ...errorsValidation, title: 'El título del libro debe tener al menos 3 letras.'};
    } else {
      delete errorsValidation.title;
    }


    if (bookData.author === '') {
      errorsValidation = { ...errorsValidation, author: 'Campo obligatorio.'};
    } else if (bookData.author?.length < 2) {
      errorsValidation = { ...errorsValidation, author: 'El nombre del autor debe tener al menos 2 letras.'};
    } else {
      delete errorsValidation.author;
    }

    return errorsValidation;
  }

  const submitBookHandler = () => {
    // TODO: U3.1 - B) Estrategias de validación de un formulario
    // 1. En el submit
    // 2. Cuando cambia un valor 
    // 3. Cuando abandono un campo
    // 4. Dejar que una librería lo haga por mi

    console.log('validacion', !(!isNaN(Number(enteredPageCount)) && Number(enteredPageCount) > 0));


    const bookData = {
      title: enteredTitle,
      author: enteredAuthor,
      pageCount: enteredPageCount,
      dateRead: new Date(enteredDate),
    };
    // console.log(fileInput.current.files[0]);

    const errorsValidation = validateBook(bookData);

    // TODO: U3.1 - C) Después de validar y encontrar el error en un campo quisiera hacerle foco en él.
    // console.log('errors', errorsValidation, Object.keys(errorsValidation));
    if (Object.keys(errorsValidation).length === 0) { // form ok
      saveBookData(bookData);
  
      setEnteredTitle("");
      setEnteredAuthor("");
      setEnteredPageCount("");
      setEnteredDate("");
      setCoveredImage(null);
    } else {
      setErrors(errorsValidation);
      if (errorsValidation.pageCount) {
        console.log('pageCountInputRef');
        console.log(pageCountInputRef.current.value);
        setTimeout(() => {
          pageCountInputRef.current.value = '';
          pageCountInputRef.current.focus();
        }, 1000);
      }
    }
  };

  const handleCancelClick = () => {
    onCancel();
  };

  // console.log('errors', errors);

  return (
    <form className={theme.theme === 'dark' ? 'dark-form' : 'light-form'}>
      <div className="new-book-controls">
        <div className="new-book-control">
          <label>Titulo</label>
          <input
            value={enteredTitle}
            onChange={changeTitleHandler}
            type="text"
          />
          { errors.title &&
            <div className="error">{errors.title}</div>
          }
        </div>
        <div className="new-book-control">
          <label>Autor</label>
          <input
            value={enteredAuthor}
            onChange={changeAuthorHandler}
            onBlur={onAuthorInputBlur}
            type="text"
          />
          { errors.author &&
            <div className="error">{errors.author}</div>
          }
        </div>
        <div className="new-book-control">
          <label>Cantidad de Páginas</label>
          <input
            value={enteredPageCount}
            onChange={changePageCountHandler}
            type="number"
            min="1"
            step="1"
            ref={pageCountInputRef}
          />
          { errors.pageCount &&
            <div className="error">{errors.pageCount}</div>
          }
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
        {/* TODO: U3.1 - D) Elementos controlados vs elementos no controlados  */}
        {/* https://reactjs.org/docs/uncontrolled-components.html */}
      <div className="new-book-control">
        <label>
          Portada del libro: <input type="file" ref={fileInput} onChange={(event) => { console.log(event.target.files); setCoveredImage(event.target.files) }}   />
        </label>
      </div>
      <div className="new-book-actions">
        <button onClick={handleCancelClick} type="button">
          Cancelar
        </button>
        {/* TODO: U3.1 - A) ¿Qué pasa si guardo este formulario? ¿Por qué tengo que controlar esta situación?   */}
        <button onClick={submitBookHandler} type="button">
          Agregar lectura
        </button>
      </div>
    </form>
  );
};

export default BookForm;
