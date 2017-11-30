const initial = {
  results: [],
  loading: false,
  loaded: false,
  error: false,
  err_message: ""
};
const SearchReducer = (state = initial, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false
      };
    case "SEARCH_SUCCESS":
      console.log(action.data);
      return {
        ...state,
        results: action.data,
        loading: false,
        loaded: true,
        error: false
      };
    case "SEARCH_FAILURE":
      return {
        ...state,
        loading: false,
        loaded: true,
        error: false,
        err_message: action.data
      };
    default:
      return state;
  }
};

export default SearchReducer;
