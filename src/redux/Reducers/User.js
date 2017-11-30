const initial = {
  user: {},
  loading: false,
  loaded: false,
  error: false,
  err_message: ""
};
const UserReducer = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_USER":
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false
      };
    case "FETCH_SINGLE_USER_SUCCESS":
      return {
        ...state,
        user: action.data,
        loading: false,
        loaded: true,
        error: false
      };
    case "FETCH_SINGLE_USER_FAILURE":
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

export default UserReducer;
