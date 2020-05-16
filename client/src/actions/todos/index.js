import {
    GET_ALL_TODOS,
    GET_ALL_TODOS_ERROR,
    //pull out another action creator
} from './../types';

import axios from 'axios';


export const getAllTodos = () => {
    //get manual access to dispatch
    return async function(dispatch) {
        try {
            const { data } = await axios.get('api/todos');
            dispatch({ type: GET_ALL_TODOS, payload: data });
            // dispatch({ type: INCREMENT }) like so,
        } catch (e) {
            dispatch({ type: GET_ALL_TODOS_ERROR, payload: e })
        }
    }
};

// export const getAllTodos = () => async dispatch => {
//     try {
//         const { data } = await axios.get('api/todos');
//         dispatch({ type: GET_ALL_TODOS, payload: data });
//     } catch (e) {
//         dispatch({ type: GET_ALL_TODOS_ERROR, payload: 'Something went wrong, refresh the page and try again' })
//     }
// }