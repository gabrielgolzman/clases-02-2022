import { useEffect, useState } from "react";
import "./App.css";

import SettingsContext from "./context/SettingsContext";
import AuthContext from "./context/AuthContext";
import AuthDispatchContext from "./context/AuthDispatchContext";
import Router from "./Router";
import constants from "../utils/constants";
import SettingsDispatchContext from "./context/SettingsDispatchContext";

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


const App = () => {
  // redux: reducer // state managment

  return (
      <SettingsProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </SettingsProvider>
  );
};

export default App;

// Redux casero
const AuthProvider = ({ children }) => {
  // redux: reducer // state managment
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const localUserStr = window.localStorage.getItem(constants.CURRENT_USER_STORAGE_KEY);
    try {
      const localUser = JSON.parse(localUserStr); // 
      setCurrentUser(localUser);
    } catch (ex) {
      setCurrentUser(null);
    }
  }, []);

  return (
      <AuthContext.Provider value={currentUser}>
        <AuthDispatchContext.Provider value={setCurrentUser}>
          { children }
        </AuthDispatchContext.Provider>
      </AuthContext.Provider>
  );
};

const SettingsProvider = ({ children }) => {
  const [appTheme, setAppTheme] = useState({ theme: 'dark', dateFormat: 'en-US' });

  return (
      <SettingsContext.Provider value={appTheme}>
        <SettingsDispatchContext.Provider value={setAppTheme}>
          { children }
        </SettingsDispatchContext.Provider>
      </SettingsContext.Provider>
  );
};