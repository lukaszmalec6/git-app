const initial = {
  user: {},
  error: false
};
const UserReducer = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_USER":
      return {
        ...state
      };
    case "FETCH_SINGLE_USER_SUCCESS":
      return {
        ...state,
        user: action.data,
        error: false
      };
    case "FETCH_SINGLE_USER_FAILURE":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default UserReducer;
