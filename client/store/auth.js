import axios from "axios";
import history from "../history";

const TOKEN = "token";

/**
 * ACTION TYPES
 */
const SET_AUTH = "SET_AUTH";
const UPDATE_AUTH = "UPDATE_AUTH";

/**
 * ACTION CREATORS
 */
const setAuth = auth => ({ type: SET_AUTH, auth });
const updateAuth = user => ({ type: UPDATE_AUTH, user });

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get("/auth/me", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuth(res.data));
  }
};

export const authenticate = (username, password, email, method) => async dispatch => {
  try {
    const res = await axios.post(`/auth/${method}`, {
      username,
      password,
      email,
    });
    window.localStorage.setItem(TOKEN, res.data.token);
    dispatch(me());
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

export const updateAuthThunk = user => async dispatch => {
  try {
    const token = window.localStorage.getItem("token");
    //console.log("i am a failure");
    const { data } = await axios.put("/api/users/update", { user }, { headers: { authorization: token } });
    dispatch(updateAuth(data));
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  history.push("/login");
  return {
    type: SET_AUTH,
    auth: {},
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    case UPDATE_AUTH:
      return action.user;
    default:
      return state;
  }
}
