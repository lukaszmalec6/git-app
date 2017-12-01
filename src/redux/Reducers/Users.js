const initial = {
  users: [],
  next: {},
  loading: false,
  loaded: false,
  error: false,
  err_message: ""
};
const UsersReducer = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_GIT_USERS":
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false
      };
    case "FETCH_GIT_USERS_SUCCESS":
      return {
        ...state,
        users: state.users.concat(action.data),
        next: action.next,
        loading: false,
        loaded: true,
        error: false
      };
    case "FETCH_GIT_USERS_FAILURE":
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true,
        err_message: action.error
      };
    default:
      return state;
  }
};
export default UsersReducer;
