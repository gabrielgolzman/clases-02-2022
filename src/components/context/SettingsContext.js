import { createContext } from "react";

const SettingsContext = createContext({ theme: 'light', dateFormat: 'es-AR' });

export default SettingsContext;