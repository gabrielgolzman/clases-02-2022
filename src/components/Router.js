import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import AdminScreen from "./screens/AdminScreen";
import BooksScreen from "./screens/BooksScreen";
import LoginScreen from "./screens/LoginScreen";

// Router casero
const Router = () => {
    const currentUser = useContext(AuthContext);
    return (
        <>
            <h2>Books-Champions-App</h2>
            { currentUser && 
                <>
                    { currentUser.role === 'admin' && <AdminScreen /> }
                    { currentUser.role === 'reader' && <BooksScreen /> }
                </>
            }
            { !currentUser && <LoginScreen /> }
        </>
    );
}

export default Router;