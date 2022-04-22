import axios from 'axios';

const CHECKOUT_ORDER = 'CHECKOUT_ORDER';

const checkoutOrder = (payload) => ({
  type: CHECKOUT_ORDER,
  payload,
});

export const orderCheckoutThunk = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token') || '';
      console.log(token);
      if (token) {
        const { data } = await axios.post(
          '/api/orders/checkout',
          {},
          {
            headers: {
              authorization: token,
            },
          }
        );
        dispatch(checkoutOrder(data));
      } else {
        //TODO: local storage
      }
    } catch (error) {
      console.log(error);
    } finally {
      // TODO: history.push('/confirmation');
    }
  };
};
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECKOUT_ORDER:
      return { ...payload };
    default:
      return state;
  }
};
