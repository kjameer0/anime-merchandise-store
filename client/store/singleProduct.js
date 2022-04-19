import axios from "axios";
import history from "../history";

const SET_SINGLE_PRODUCT = "SET_SINGLE_PRODUCT";

const setSingleProduct = (product) => ({ type: SET_SINGLE_PRODUCT, product });

export const setSingleProductThunk = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(setSingleProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};
export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
