const initialState = {
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-TO-FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };
    case "DELETE-TO-FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [
            ...state.favourites.content.filter((job) => job !== action.payload),
          ],
        },
      };

    default:
      return state;
  }
};
export default mainReducer;
