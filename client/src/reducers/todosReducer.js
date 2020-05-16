import {
  GET_ALL_TODOS,
  GET_ALL_TODOS_ERROR
} from './../actions/types';

const INITIAL_STATE = {
  allTodos:[],
  getAllTodosError:''
};



//set up reducers
export default function (state = INITIAL_STATE, action) {
  switch(action.type){
    case GET_ALL_TODOS:
      return{...state, allTodos: action.payload, GET_ALL_TODOS_ERROR : ''};
    case GET_ALL_TODOS_ERROR:
      return{...state, getAllTodosError: action.payload}; 
    default:
      return state;
  }
}