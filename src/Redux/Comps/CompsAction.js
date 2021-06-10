import { SIDE_BTN_ROTATE, SIDE_BTN_NORMAL, LIST_OPEN_TYPE } from "./CompsType";

export const sideBtnRotate = () => {
  console.log();
  return {
    type: SIDE_BTN_ROTATE,
  };
};
export const sideBtnNormal = () => {
  return {
    type: SIDE_BTN_NORMAL,
  };
};
export const listMenuOpen = (menu) => {
  console.log(menu);
  return {
    type: LIST_OPEN_TYPE,
    log: menu,
  };
};
