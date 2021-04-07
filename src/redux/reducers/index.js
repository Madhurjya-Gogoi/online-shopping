import { combineReducers } from "redux";
import { productreducer ,selectedProductReducer} from "./productReducer";

const reducer = combineReducers({
    allProducts: productreducer,
    product:selectedProductReducer,
});

export default reducer;