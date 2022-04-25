import axios from "axios";
import history from "../history";

const SET_CART = "SET_CART";
const ADD_CART = "ADD_CART";
const DELETE_ITEM = "DELETE_ITEM";
const UPDATE_CART = "UPDATE_CART";
const CLEAR_CART = "CLEAR_CART";
const setCart = (cart) => ({ type: SET_CART, cart });
const addToCart = (product) => ({ type: ADD_CART, product });
const updateCart = (newCart) => ({ type: UPDATE_CART, newCart });
const deleteFromCart = (product) => ({ type: DELETE_ITEM, product });

export const clearCart = () => ({ type: CLEAR_CART, cart: [] });

export const setCartThunk = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        if (window.localStorage.getItem("cart")) {
          let storageCart = JSON.parse(window.localStorage.getItem("cart"));
          if (storageCart.length) {
            storageCart.forEach(async (cartItem, index) => {
              const { data } = await axios.post("/api/cart/", cartItem, {
                headers: {
                  authorization: token,
                },
              });
            });
          }
        }
        const { data } = await axios.get("/api/cart", {
          headers: {
            authorization: token,
          },
        });
        dispatch(setCart(data));
        window.localStorage.removeItem("cart");

      } else {
        if (window.localStorage.getItem("cart")) {
          dispatch(setCart(JSON.parse(window.localStorage.getItem("cart"))));
        } else {
          window.localStorage.setItem("cart", JSON.stringify([]));
          dispatch(setCart([]));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFromCartThunk = (productInfo) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token") || "";
      if (token) {
        const { data } = await axios.delete("/api/cart/", {
          headers: {
            authorization: token,
          },
          data: { id: productInfo },
        });
        dispatch(deleteFromCart(data));
      } else {
        let currentCart = JSON.parse(window.localStorage.getItem("cart"));
        currentCart = currentCart.filter(
          (element) => element.id !== productInfo.id
        );
        window.localStorage.setItem("cart", currentCart);
        dispatch(deleteFromCart(productInfo));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCartThunk = (productInfo) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token") || "";
      if (token) {
        const { data } = await axios.post("/api/cart", productInfo, {
          headers: {
            authorization: token,
          },
        });
        // dispatch(addToCart(data));
      } else {
        let localCart = JSON.parse(window.localStorage.getItem("cart"));
        let newCart;
        if (localCart.some((item) => item.product.id === productInfo.id)) {
          newCart = localCart.map((item) => {
            if (item.product.id === productInfo.id) {
              item.quantity = item.quantity + 1;
            }
            return item;
          });
        } else {
          let cartItem = {
            quantity: 1,
            product: productInfo,
            id: productInfo.id,
          };
          localCart.push(cartItem);
          newCart = localCart;
        }
        localCart = window.localStorage.setItem(
          "cart",
          JSON.stringify(newCart)
        );
        //dispatch(addToCart(newCart));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const updateCartThunk = (productInfo) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token") || "";
      if (token) {
        const { data } = await axios.put("/api/cart/", productInfo, {
          headers: {
            authorization: token,
          },
        });
        dispatch(updateCart(data));
      } else {
        //unfinished
        console.log("hi");
        let currentCart = window.localStorage.getItem("cart");
        currentCart.push(productInfo);
        window.localStorage.setItem("cart", currentCart);
        dispatch(updateCart(productInfo));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case ADD_CART:
      return [...state, action.product];
    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.product.id);
    case UPDATE_CART:
      return state.map((item) => {
        if (item.id === action.newCart.id) return action.newCart;
        return item;
      });
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
}
