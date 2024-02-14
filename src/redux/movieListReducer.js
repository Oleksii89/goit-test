const INITIAL_STATE = {
  moviesData: [],
  isLoading: false,
  error: null,
};

export const movieListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'movieList/setIsLoading': {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case 'movieList/setMoviesData': {
      return {
        ...state,
        moviesData: action.payload,
      };
    }
    case 'movieList/setError': {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
