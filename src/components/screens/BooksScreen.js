import { useEffect, useState } from "react";

import Books from "../books/Books/Books";
import NewBook from "../books/NewBook/NewBook";
import LogoutButton from '../ui/LogoutButton';


const BooksScreen = () => {
  const [books, setBooks] = useState([]);

  const saveBookHandler = (bookData) => {
    let newBooks = [bookData, ...books];
    setBooks(newBooks);
    localStorage.setItem('books', JSON.stringify(newBooks));
  };
  useEffect(() => {
    let valueStr = localStorage.getItem('books');

    try {
      if (valueStr) {
        let localBooks = JSON.parse(valueStr);
        setBooks(localBooks);
      } else {
        setBooks([]);
      }
    } catch (ex) {
      alert('Ocurrió error inesperado.');
      setBooks([]);
    }
  }, []);


  return (
    <>
        <h2>Quiero leer libros! <LogoutButton /></h2>
        <NewBook saveBook={saveBookHandler} />
        <button 
            onClick={() => {
                console.log('borre los libros');
                setBooks([]);
                localStorage.removeItem('books');
            }}
        >
            Borrar todos
        </button>
        {/* <button
            onClick={() => {
                setAppTheme({
                    theme: appTheme.theme === 'dark' ? 'light' : 'dark',
                    dateFormat: appTheme.theme === 'dark' ? 'es-AR' : 'en-US'
                });
            }}
        >
            { appTheme.theme === 'dark' ? 'Claro' : 'Oscuro'}
        </button> */}
        <Books books={books} />
    </>
  );
};

export default BooksScreen;
