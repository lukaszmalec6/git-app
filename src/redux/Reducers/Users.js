const initial = {
  users: [],
  error: false,
  next: {}
};
const UsersReducer = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_GIT_USERS":
      return {
        ...state
      };
    case "FETCH_GIT_USERS_SUCCESS":
      return {
        ...state,
        users: state.users.concat(action.data),
        next: action.next,
        error: false
      };
    case "FETCH_GIT_USERS_FAILURE":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};
export default UsersReducer;
