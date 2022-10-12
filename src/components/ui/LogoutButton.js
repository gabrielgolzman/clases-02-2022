import { useContext } from "react";
import constants from "../../utils/constants";
import AuthDispatchContext from "../context/AuthDispatchContext";

const LogoutButton = () => {
    const setCurrentUser = useContext(AuthDispatchContext);
    return (
        <button
            onClick={() => {
                // cambiar context auth
                setCurrentUser(null);
                // cambiar localstorate
                window.localStorage.removeItem(constants.CURRENT_USER_STORAGE_KEY); 
            }}
        >
            Cerrar sessión
        </button>
    )
}

export default LogoutButton;