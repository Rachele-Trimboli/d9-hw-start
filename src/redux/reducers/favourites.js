import { ADD_TO_FAVOURITES, DELETE_TO_FAVOURITES } from "../actions";

const initialState = {
  content: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case DELETE_TO_FAVOURITES:
      return {
        ...state,
        content: [...state.content.filter((job) => job !== action.payload)],
      };

    default:
      return state;
  }
};
export default favouritesReducer;
