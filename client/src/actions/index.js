import { CHANGE_ITEM } from "../constants/action-types";

export const changeItem = item => ({ type: CHANGE_ITEM, payload: item });