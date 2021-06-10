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

const activeNotyRequest = () => {
  return {
    type: ACTIVE_NOTY_REQUEST,
  };
};

const activeNotySuccess = (noty, id) => {
  return {
    type: ACTIVE_NOTY_SUCCESS,
    log: noty,
    badge: id,
  };
};

const activeNotyFailure = (error) => {
  return {
    type: ACTIVE_NOTY_FAILURE,
    log: error,
  };
};

const activeChatRequest = () => {
  return {
    type: ACTIVE_CHAT_REQUEST,
  };
};

const activeChatSuccess = (chat, id) => {
  return {
    type: ACTIVE_CHAT_SUCCESS,
    log: chat,
    badge: id,
  };
};

const activeChatFailure = (error) => {
  return {
    type: ACTIVE_CHAT_FAILURE,
    log: error,
  };
};
const insertNotyRequest = () => {
  return {
    type: INSERT_NOTY_REQUEST,
  };
};

const insertNotySuccess = () => {
  return {
    type: INSERT_NOTY_SUCCESS,
  };
};

const insertNotyFailure = () => {
  return {
    type: INSERT_NOTY_FAILURE,
  };
};

const insertChatRequest = () => {
  return {
    type: INSERT_CHAT_REQUEST,
  };
};

const insertChatSuccess = () => {
  return {
    type: INSERT_CHAT_SUCCESS,
  };
};

const insertChatFailure = () => {
  return {
    type: INSERT_CHAT_FAILURE,
  };
};

export const fetchAllNoty = () => {
  return (dispatch) => {
    dispatch(activeNotyRequest());

    let data = [];
    if (localStorage.getItem("userNoty") == null) {
      localStorage.setItem("userNoty", JSON.stringify(data));
    }
    var id = parseInt(localStorage.getItem("employeeId"));
    data = JSON.parse(localStorage.getItem("userNoty"));

    dispatch(activeNotySuccess(data, id));
  };
};

export const insertNoty = (data) => {
  return (dispatch) => {
    dispatch(insertNotyRequest());
    let allnoty = JSON.parse(localStorage.getItem("userNoty"));
    data.id = genrateEmpId();
    const mangedata = [...allnoty, data];
    localStorage.setItem("userNoty", JSON.stringify(mangedata));

    dispatch(insertNotySuccess());
    dispatch(activeNotyRequest());

    dispatch(activeNotySuccess(mangedata, data.id));
  };
};

const genrateEmpId = () => {
  if (localStorage.getItem("employeeId") == null) {
    localStorage.setItem("employeeId", 0);
  }
  var id = parseInt(localStorage.getItem("employeeId"));
  localStorage.setItem("employeeId", (++id).toString());
  return id;
};
const genrateChatId = () => {
  if (localStorage.getItem("chatId") == null) {
    localStorage.setItem("chatId", 0);
  }
  var id = parseInt(localStorage.getItem("chatId"));
  localStorage.setItem("chatId", (++id).toString());
  return id;
};

export const fetchAllChat = () => {
  return (dispatch) => {
    dispatch(activeChatRequest());
    let data = [];
    if (localStorage.getItem("userChat") == null) {
      localStorage.setItem("userChat", JSON.stringify(data));
    }
    var id = parseInt(localStorage.getItem("chatId"));
    var olddata = JSON.parse(localStorage.getItem("userChat"));
    dispatch(activeChatSuccess(olddata, id));
  };
};

export const insertChat = (data) => {
  return (dispatch) => {
    dispatch(insertChatRequest());
    let allchat = JSON.parse(localStorage.getItem("userChat"));
    data.id = genrateChatId();
    const mangedata = [...allchat, data];
    localStorage.setItem("userChat", JSON.stringify(mangedata));

    dispatch(insertChatSuccess());
    dispatch(activeChatRequest());

    dispatch(activeChatSuccess(mangedata, data.id));
  };
};
