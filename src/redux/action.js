import {
  ADD_COUNTER,
  DEC_COUNTER,
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS
} from "./actionType";
import axios from "axios";
export const addCounter = (payload) => {
  return {
    type: ADD_COUNTER,
    payload
  };
};

export const decCounter = (payload) => {
  return {
    type: DEC_COUNTER,
    payload
  };
};

export const getuserData = (payload) => async (dispatch) => {
  try {
    dispatch({ type: GET_DATA_REQUEST });
    let data = await axios.get("https://reqres.in/api/users?page=2");
    console.log(data, "testing");
    dispatch({ type: GET_DATA_SUCCESS, payload: data?.data?.data });
  } catch (error) {
    dispatch({ type: GET_DATA_ERROR });
  }
};
