import { combineReducers } from "redux";
import { AddtocartReducer, productReducer,selectedProductReducer } from "./productReducer";

const reducer=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    cart:AddtocartReducer,

})

export default reducer;