import axios from 'axios';
const SET_ORDERS = 'SET_ORDERS';

const setOrders = (payload) => ({
  type: SET_ORDERS,
  payload,
});

export const fetchOrdersThunk = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem('token');
      if (!token) return;
      const { data } = await axios.get('/api/orders/', {
        headers: {
          authorization: token,
        },
      });
      dispatch(setOrders(data));
    } catch (error) {
      console.log(error);
    }
  };
};
const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ORDERS:
      return [...payload];

    default:
      return state;
  }
};
