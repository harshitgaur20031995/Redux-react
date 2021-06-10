import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  LOGIN_USERS_FAILURE,
  LOGIN_USERS_REQUEST,
  LOGIN_USERS_SUCCESS,
  USER_NOTY_FAILURE,
  USER_NOTY_REQUEST,
  USER_NOTY_SUCCESS,
} from "./UsersType";

const initialState = {
  loading: false,
  users: [],
  error: "",
  loginuser: [],
  loginerror: "",
  usernoty: [],
  notyerror: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };

    case LOGIN_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loginuser: action.log,
        loginerror: "",
      };

    case LOGIN_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        loginuser: [],
        loginerror: action.log,
      };
    case USER_NOTY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_NOTY_SUCCESS:
      return {
        ...state,
        loading: false,
        usernoty: action.log,
        notyerror: "",
      };
    case USER_NOTY_FAILURE:
      return {
        ...state,
        loading: false,
        usernoty: [],
        notyerror: action.log,
      };
    default:
      return state;
  }
};

export default usersReducer;
