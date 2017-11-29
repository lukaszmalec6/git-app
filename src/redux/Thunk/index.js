import * as ActionCreators from "../Actions/ActionsCreators";
import parse from "parse-link-header";

export const fetchUsersList = since => {
  return dispatch => {
    dispatch(ActionCreators.fetchGitUsers(since));
    fetch("https://api.github.com/users?since=" + since)
      .then(res => {
        let headers = parse(res.headers.get("Link"));
        res
          .json()
          .then(values =>
            dispatch(ActionCreators.fetchGitUsersSuccess(values, headers.next))
          );
      })
      .catch(dispatch(ActionCreators.fetchGitUsersFailure()));
  };
};

export const fetchUserRepositiories = login => {
  return dispatch => {
    dispatch(ActionCreators.fetchSingleUser(login));
    fetch("https://api.github.com/users" + login)
      .then(res => {
        res
          .json()
          .then(values =>
            dispatch(ActionCreators.fetchSingleUserSuccess(values))
          );
      })
      .catch(dispatch(ActionCreators.fetchSingleUserFailure()));
    dispatch(ActionCreators.fetchUserRepo());
    fetch("https://api.github.com/users" + login + "/repos")
      .then(res => {
        res
          .json()
          .then(values =>
            dispatch(ActionCreators.fetchUserRepoSuccess(values))
          );
      })
      .catch(dispatch(ActionCreators.fetchUserRepoFailure()));
  };
};
