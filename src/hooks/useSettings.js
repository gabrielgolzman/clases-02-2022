import { useContext } from "react";
import SettingsContext from "../components/context/SettingsContext";
import SettingsDispatchContext from "../components/context/SettingsDispatchContext";

const useSettings = () => {
    const appTheme = useContext(SettingsContext);
    const setAppTheme = useContext(SettingsDispatchContext);
    return [
        appTheme,
        setAppTheme
    ];
};
export default useSettings;