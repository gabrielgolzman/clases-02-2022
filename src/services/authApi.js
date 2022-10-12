import constants from "../utils/constants";

// mock de una api de login
export function login (email, password) {
    return new Promise(( resolve, reject) => {
        setTimeout(() => {
            if (email === 'juan@perez.com' && password === '123456') {
                resolve({ email, name: 'Juan Perez', role: 'reader' });
            } else if (email === 'admin@g.com' && password === '123456') {
                resolve({ email, name: 'Admin', role: 'admin' });
            } else {
                reject('Usuario incorrecto');
            }
        }, Math.round(Math.random() * 1000));
    });
    
    // fetch(constants.BASE_URL_API + '/login', { body: { email, password } });
}