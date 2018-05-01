import { ADD_ITEM, DELETE_ITEM } from './actionTypes';

export const addItem = (detailInfo) => {
  return {
    type: ADD_ITEM,
    detailInfo: detailInfo
  };
};

export const deleteItem = (key) => {
  return {
    type: DELETE_ITEM,
    itemKey: key
  };
};
