import axios from "axios";

const CHECKOUT_ORDER = "CHECKOUT_ORDER";
const CLEAR_ORDER = "CLEAR_ORDER";

export const clearOrder = () => ({
  type: CLEAR_ORDER,
  payload: initialState,
});

const checkoutOrder = payload => ({
  type: CHECKOUT_ORDER,
  payload,
});

export const orderCheckoutThunk = (confirmationId, history) => {
  return async dispatch => {
    try {
      const token = window.localStorage.getItem('token');
      if (!token) return;
      const { data } = await axios.post(
        '/api/orders/checkout',
        { confirmationId },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch(checkoutOrder(data));
    } catch (error) {
      console.log(error);
    } finally {
      history.push("/confirmation");
    }
  };
};
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECKOUT_ORDER:
      return { ...payload };
    case CLEAR_ORDER:
      return { ...payload };
    default:
      return state;
  }
};
