import { AUTH_USER, AUTH_USER_ERROR } from './../types';

export const signOut = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    };
}