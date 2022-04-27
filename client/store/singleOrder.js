import axios from 'axios';

const CHECKOUT_ORDER = 'CHECKOUT_ORDER';
const CLEAR_ORDER = 'CLEAR_ORDER';
const SET_ORDER = 'SET_ORDER';
export const clearOrder = () => ({
  type: CLEAR_ORDER,
  payload: initialState,
});

const checkoutOrder = (payload) => ({
  type: CHECKOUT_ORDER,
  payload,
});

const setOrder = (payload) => ({
  type: SET_ORDER,
  payload,
});

export const orderCheckoutThunk = (confirmationId, history) => {
  return async (dispatch) => {
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
      history.push(`/orders/${confirmationId}`);
    }
  };
};
export const fetchOrderThunk = (confirmation) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      if (!token) return;
      const { data } = await axios.get(`/api/orders/${confirmation}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(setOrder(data));
    } catch (error) {
      console.log(error);
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
    case SET_ORDER:
      return { ...payload };
    default:
      return state;
  }
};
