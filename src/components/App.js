import { useEffect, useState } from "react";
import "./App.css";

import Books from "./books/Books/Books";
import NewBook from "./books/NewBook/NewBook";
import SettingsContext from "./context/SettingsContext";
import AuthContext from "./context/AuthContext";

/*
- Promesas, fetch y localStorage
- useEffect: hacer cambios después de un renderizado (dependencias, como funcionan)
- useEffect: Agregar dummy books o los que carge el usuarios a localStorage y cada vez que inicio los cargue
- useEffect: Cambiar el título de la página
- useEffect: cuando no utilizarlo https://beta.reactjs.org/learn/you-might-not-need-an-effect

- useContext: es un estado global para evitar prop-drilling 
- useContext: partes de un contexto
- useContext: modo oscuro / modo claro
- useContext: libros favoritos
*/

const DUMMY_BOOKS = [
  {
    id: 1,
    title: "100 años de soledad",
    author: "Gabriel García Marquez",
    dateRead: new Date(2021, 8, 12),
    pageCount: 410,
  },
  {
    id: 2,
    title: "Todos los fuegos el fuego",
    author: "Julio Cortazar",
    dateRead: new Date(2020, 6, 11),
    pageCount: 197,
  },
  {
    id: 3,
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    dateRead: new Date(2021, 5, 9),
    pageCount: 256,
  },
  {
    id: 4,
    title: "Las dos torres",
    author: "J.R.R Tolkien",
    dateRead: new Date(2020, 3, 22),
    pageCount: 352,
  },
];

const App = () => {
  const [books, setBooks] = useState([]);
  const [appTheme, setAppTheme] = useState({ theme: 'dark', dateFormat: 'en-US' });
  const [currentUser, setCurrentUser] = useState({ rol: 'admin' });

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
    <SettingsContext.Provider value={appTheme}>
      <AuthContext.Provider value={currentUser}>
        <>
          <h2>Books-Champions-App</h2>
          <p>Quiero leer libros!</p>
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
          <button
            onClick={() => {
              setAppTheme({
                theme: appTheme.theme === 'dark' ? 'light' : 'dark',
                dateFormat: appTheme.theme === 'dark' ? 'es-AR' : 'en-US'
              });
            }}
          >
            { appTheme.theme === 'dark' ? 'Claro' : 'Oscuro'}
          </button>
          <span>{ JSON.stringify(appTheme) }</span>
          <Books books={books} />
        </>
      </AuthContext.Provider>
    </SettingsContext.Provider>
  );
};

export default App;
