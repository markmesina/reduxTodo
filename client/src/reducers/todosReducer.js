import {
  GET_ALL_TODOS,
  GET_ALL_TODOS_ERROR,
  GET_USER_TODOS,
  GET_USER_TODOS_ERROR,
  ADD_TODO_ERROR,
} from './../actions/types';

const INITIAL_STATE = {
  allTodos:[],
  userTodos:[],
  addTodoError: '',
  getAllTodosError:'',
  getUserTodosServerError:'',
  getUserTodosClientError: '',
};



//set up reducers
export default function (state = INITIAL_STATE, action) {
  switch(action.type){
    case GET_ALL_TODOS:
      return{...state, allTodos: action.payload, GET_ALL_TODOS_ERROR : ''};
    case GET_ALL_TODOS_ERROR:
      return{...state, getAllTodosError: action.payload}; 
    case GET_USER_TODOS:
      return{...state, userTodos:action.payload, getUserTodosClientError: '', getUserTodosServerError: '', addTodoError: '',};
    case GET_USER_TODOS_ERROR:
        return{ ...state, getUserTodosServerError: action.serverError, getUserTodosClientError: action.clientError}
    case ADD_TODO_ERROR:
      return {...state, addTodoError: action.payload };
    
        default:
      return state;
  }
}