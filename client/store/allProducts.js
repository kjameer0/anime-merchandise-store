import axios from "axios";
import history from "../history";

const SET_PRODUCTS = "SET_PRODUCTS";

const setProducts = (products) => ({ type: SET_PRODUCTS, products });

export const setProductsThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/products");
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];
export default function allProductsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
