const initial = {
  repositories: [],
  error: false
};
const RepoReducer = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_USER_REPO":
      return {
        ...state
      };
    case "FETCH_USER_REPO_SUCCESS":
      return {
        ...state,
        repositories: action.data,
        error: false
      };
    case "FETCH_USER_REPO_FAILURE":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default RepoReducer;
