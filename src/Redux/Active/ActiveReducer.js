import {
  ACTIVE_CHAT_FAILURE,
  ACTIVE_CHAT_REQUEST,
  ACTIVE_CHAT_SUCCESS,
  ACTIVE_NOTY_FAILURE,
  ACTIVE_NOTY_REQUEST,
  ACTIVE_NOTY_SUCCESS,
  INSERT_CHAT_FAILURE,
  INSERT_CHAT_REQUEST,
  INSERT_CHAT_SUCCESS,
  INSERT_NOTY_FAILURE,
  INSERT_NOTY_REQUEST,
  INSERT_NOTY_SUCCESS,
} from "./ActiveType";

const initialState = {
  loading: false,
  notyData: [],
  notyError: "",
  notybadge: null,
  chatbadge: null,
  chatData: [],
  chatError: "",
};

const ActiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_NOTY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIVE_NOTY_SUCCESS:
      return {
        ...state,
        loading: false,
        notyData: action.log,
        notybadge: action.badge,
      };
    case ACTIVE_NOTY_FAILURE:
      return {
        ...state,
        loading: false,
        notyError: action.log,
      };
    case ACTIVE_CHAT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIVE_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        chatData: action.log,
        chatbadge: action.badge,
      };
    case ACTIVE_CHAT_FAILURE:
      return {
        ...state,
        loading: false,
        chatError: action.log,
      };
    case INSERT_NOTY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case INSERT_NOTY_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case INSERT_NOTY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case INSERT_CHAT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case INSERT_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case INSERT_CHAT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default ActiveReducer;
