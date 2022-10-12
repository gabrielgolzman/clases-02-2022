import * as React from 'react';
import { login } from '../../services/authApi';
import constants from '../../utils/constants';
import AuthDispatchContext from '../context/AuthDispatchContext';

const LoginScreen = ({ }) => {
    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');
    const setCurrentUser = React.useContext(AuthDispatchContext);
    return (
        <>
            <h2>Ingrese a la plataforma</h2>
            <label for="email">Email</label>
            <input id="email" type='text' value={email} onChange={(event) => setEmail(event.target.value)} />
            <label for="password">Contraseña</label>
            <input id="password" type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
            <button onClick={() => {
                login(email, password).then((user) => {
                    // usuario logueado correcto
                    console.log('login correcto', user);
                    setCurrentUser(user);
                    window.localStorage.setItem(constants.CURRENT_USER_STORAGE_KEY, JSON.stringify(user)); // [Object object]
                }).catch((err) => {
                    alert(err);
                })
            }}>Ingresar</button>
        </>
    )
}

export default LoginScreen;