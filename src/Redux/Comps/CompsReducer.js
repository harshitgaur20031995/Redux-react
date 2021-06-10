import { SIDE_BTN_ROTATE, SIDE_BTN_NORMAL, LIST_OPEN_TYPE } from "./CompsType";

const initialState = {
  rotate: "rotate(0deg)",
  view: 0,
  swidth: "400px",
  sdis: "default",
  sval: "block",
  dshlist: 2,
  listactive: "",
};

const CompsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDE_BTN_ROTATE:
      return {
        ...state,
        rotate: "rotate(180deg)",
        view: 1,
        swidth: "70px",
        sdis: "large",
        sval: "none",
        dshlist: 0,
      };

    case SIDE_BTN_NORMAL:
      return {
        ...state,
        rotate: "rotate(0deg)",
        view: 0,
        swidth: "400px",
        sdis: "default",
        sval: "block",
        dshlist: 2,
      };
    case LIST_OPEN_TYPE:
      return {
        ...state,
        listactive: action.log,
      };
    default:
      return state;
  }
};
export default CompsReducer;
