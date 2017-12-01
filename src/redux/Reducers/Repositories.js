const initial = {
  repositories: [],
  loading: false,
  loaded: false,
  error: false,
  err_message: ""
};
const RepoReducer = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_USER_REPO":
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false
      };
    case "FETCH_USER_REPO_SUCCESS":
      return {
        ...state,
        repositories: action.data,
        error: false,
        loading: false,
        loaded: true
      };
    case "FETCH_USER_REPO_FAILURE":
      return {
        ...state,
        error: true,
        loading: false,
        loaded: false,
        err_message: action.error
      };
    default:
      return state;
  }
};

export default RepoReducer;
