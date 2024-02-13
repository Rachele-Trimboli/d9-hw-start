// import { ADD_TO_FAVOURITES } from "../actions";
// import { DELETE_TO_FAVOURITES } from "../actions";

// const initialState = {
//   favourites: {
//     content: [],
//   },
// };

// const mainReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_FAVOURITES:
//       return {
//         ...state,
//         favourites: {
//           ...state.favourites,
//           content: [...state.favourites.content, action.payload],
//         },
//       };
//     case DELETE_TO_FAVOURITES:
//       return {
//         ...state,
//         favourites: {
//           ...state.favourites,
//           content: [
//             ...state.favourites.content.filter((job) => job !== action.payload),
//           ],
//         },
//       };

//     default:
//       return state;
//   }
// };
// export default mainReducer;
