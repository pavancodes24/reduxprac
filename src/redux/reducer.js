import {
  ADD_COUNTER,
  DEC_COUNTER,
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS
} from "./actionType";

const initCounter = {
  count: 0
};

export const countReducer = (state = initCounter, { type, payload }) => {
  switch (type) {
    case ADD_COUNTER:
      return {
        ...state,
        count: state.count + payload
      };
    case DEC_COUNTER:
      return {
        ...state,
        count: state.count - payload
      };

    default:
      return state;
  }
};

const initData = {
  isLoading: false,
  isError: false,
  data: []
};
export const reqresReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false
      };

    default:
      return state;
  }
};
