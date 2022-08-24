import "./App.css";

import Books from "./books/Books/Books";
import NewBook from "./books/NewBook/NewBook";

const App = () => {
  const books = [
    {
      title: "100 años de soledad",
      author: "Gabriel García Marquez",
      dateRead: new Date(2021, 8, 12),
      pageCount: 410,
    },
    {
      title: "Todos los fuegos el fuego",
      author: "Julio Cortazar",
      dateRead: new Date(2020, 6, 11),
      pageCount: 197,
    },
    {
      title: "Asesinato en el Orient Express",
      author: "Agatha Christie",
      dateRead: new Date(2021, 5, 9),
      pageCount: 256,
    },
    {
      title: "Las dos torres",
      author: "J.R.R Tolkien",
      dateRead: new Date(2020, 3, 22),
      pageCount: 352,
    },
  ];

  const saveBookHandler = (bookData) => {
    console.log("In App.js");
    console.log(bookData);
  };

  return (
    <>
      <h2>Books-Champions-App</h2>
      <p>Quiero leer libros!</p>
      <NewBook saveBook={saveBookHandler} />
      <Books books={books} />
    </>
  );
};

export default App;
