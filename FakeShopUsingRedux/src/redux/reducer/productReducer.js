import { ActionTypes } from "../contants/action-types";

const intialState = {
  products: [
    // {
    //     id:1,
    //     title:"Abc",
    //     category:"Developer"
    // }
  ],
};
export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
      break;
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
      break;

    default:
      return state;
  }
};


export const AddtocartReducer = (state =0, { type, payload }) => {
    switch (type) {
      case ActionTypes.ADD_TO_CART:
        return state+1;
      default:
        return state;
    }
  };