import axios from "axios";
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

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const loginUsersRequest = () => {
  return {
    type: LOGIN_USERS_REQUEST,
  };
};
const loginUsersSuccess = (loginuser) => {
  return {
    type: LOGIN_USERS_SUCCESS,
    log: loginuser,
  };
};
const loginUsersFailure = (loginerror) => {
  return {
    type: LOGIN_USERS_FAILURE,
    log: loginerror,
  };
};
const userNotyRequest = () => {
  return {
    type: USER_NOTY_REQUEST,
  };
};
const userNotySuccess = (notydata) => {
  return {
    type: USER_NOTY_SUCCESS,
    log: notydata,
  };
};
const userNotyFailure = (notyerror) => {
  return {
    type: USER_NOTY_FAILURE,
    log: notyerror,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        console.log(users);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const loginUser = () => {
  return (dispatch) => {
    dispatch(loginUsersRequest());

    let data = {
      name: "Atul Solanki",
      email: "atulsolanki991100@gmail.com",
    };

    dispatch(loginUsersSuccess(data));

    // axios
    //   .get("http://192.168.100.95:3005/user/login")
    //   .then((lresponse) => {
    //     const user = lresponse.data;
    //     console.log(user);
    //     dispatch(loginUsersSuccess(user));
    //   })
    //   .catch((lerror) => {
    //     dispatch(fetchUsersFailure(lerror.message));
    //   });
  };
};
