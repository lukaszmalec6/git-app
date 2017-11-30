import * as ActionCreators from "../actions/ActionsCreators";
import { beginTask, endTask } from "redux-nprogress";
import parse from "parse-link-header";

export const fetchUsersList = since => {
  return dispatch => {
    dispatch(beginTask());
    dispatch(ActionCreators.fetchGitUsers(since));
    fetch("https://api.github.com/users?since=" + since)
      .then(res => {
        if (res.status.toString().charAt(0) == 5) {
          dispatch(ActionCreators.fetchGitUsersFailure("Server error"));
        }
        let headers = parse(res.headers.get("Link"));
        res
          .json()
          .then(values => {
            dispatch(ActionCreators.fetchGitUsersSuccess(values, headers.next));
            dispatch(endTask());
          })
          .catch(err => dispatch(ActionCreators.fetchGitUsersFailure(err)));
      })
      .catch(err => dispatch(ActionCreators.fetchGitUsersFailure(err)));
  };
};

export const fetchUserRepositiories = login => {
  return dispatch => {
    dispatch(beginTask());
    dispatch(ActionCreators.fetchSingleUser(login));
    fetch("https://api.github.com/users" + login)
      .then(res => {
        if (res.status.toString().charAt(0) == 5) {
          dispatch(ActionCreators.fetchSingleUserFailure("Server error"));
        }
        res
          .json()
          .then(values =>
            dispatch(ActionCreators.fetchSingleUserSuccess(values))
          )
          .catch(err => dispatch(ActionCreators.fetchSingleUserFailure(err)));
      })
      .catch(err => dispatch(ActionCreators.fetchSingleUserFailure(err)));
    dispatch(ActionCreators.fetchUserRepo());
    fetch("https://api.github.com/users" + login + "/repos")
      .then(res => {
        if (res.status.toString().charAt(0) == 5) {
          dispatch(ActionCreators.fetchUserRepoFailure("Server error"));
        }
        res
          .json()
          .then(values => {
            dispatch(ActionCreators.fetchUserRepoSuccess(values));
            dispatch(endTask());
          })
          .catch(err => dispatch(ActionCreators.fetchUserRepoFailure(err)));
      })
      .catch(err => dispatch(ActionCreators.fetchUserRepoFailure(err)));
  };
};
