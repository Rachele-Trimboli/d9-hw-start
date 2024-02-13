export const ADD_TO_FAVOURITES = "ADD-TO-FAVOURITES";
export const DELETE_TO_FAVOURITES = "DELETE-TO-FAVOURITES";
export const ADD_SEARCHED = "ADD_SEARCHED";

export const addToFavouritesAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  };
};

export const removeToFavourites = (data) => {
  return {
    type: DELETE_TO_FAVOURITES,
    payload: data,
  };
};

export const searched = (data) => {
  return {
    type: ADD_SEARCHED,
    payload: data,
  };
};

export const getJobCreation = (query) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        // setJobs(data);
        dispatch({
          type: ADD_SEARCHED,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
