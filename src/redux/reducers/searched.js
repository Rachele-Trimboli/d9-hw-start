import { ADD_SEARCHED } from "../actions";

const initialState = {
  searched: [],
};

const searchedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCHED:
      return {
        ...state,
        searched: action.payload,
      };

    default:
      return state;
  }
};
export default searchedReducer;
