import * as ActionCreators from "../actions/ActionCreators";
import { beginTask, endTask } from "redux-nprogress";
import parse from "parse-link-header";

export const fetchUsersList = since => {
  return dispatch => {
    dispatch(beginTask());
    dispatch(ActionCreators.fetchGitUsers(since));
    fetch("https://api.github.com/users?since=" + since)
      .then(res => {
        if (res.status.toString().charAt(0) == 5 || !res) {
          dispatch(ActionCreators.fetchGitUsersFailure("Server error"));
          return;
        }
        let headers = parse(res.headers.get("Link"));
        res
          .json()
          .then(values => {
            dispatch(ActionCreators.fetchGitUsersSuccess(values, headers.next));
            dispatch(endTask());
          })
          .catch(err =>
            dispatch(
              ActionCreators.fetchGitUsersFailure("Loading data failure")
            )
          );
      })
      .catch(err =>
        dispatch(ActionCreators.fetchGitUsersFailure("Unknown error"))
      );
  };
};

export const fetchUserRepositiories = login => {
  return dispatch => {
    dispatch(beginTask());
    dispatch(ActionCreators.fetchSingleUser(login));
    fetch("https://api.github.com/users" + login)
      .then(res => {
        if (res.status.toString().charAt(0) == 5 || !res) {
          dispatch(ActionCreators.fetchSingleUserFailure("Server error"));
          return;
        }
        res
          .json()
          .then(values =>
            dispatch(ActionCreators.fetchSingleUserSuccess(values))
          )
          .catch(err =>
            dispatch(
              ActionCreators.fetchSingleUserFailure("Loading data failure")
            )
          );
      })
      .catch(err =>
        dispatch(ActionCreators.fetchSingleUserFailure("Unknown error"))
      );
    dispatch(ActionCreators.fetchUserRepo());
    fetch("https://api.github.com/users" + login + "/repos")
      .then(res => {
        if (res.status.toString().charAt(0) == 5 || !res) {
          dispatch(ActionCreators.fetchUserRepoFailure("Server error"));
          return;
        }
        res
          .json()
          .then(values => {
            dispatch(ActionCreators.fetchUserRepoSuccess(values));
            dispatch(endTask());
          })
          .catch(err =>
            dispatch(
              ActionCreators.fetchUserRepoFailure("Loading data failure")
            )
          );
      })
      .catch(err =>
        dispatch(ActionCreators.fetchUserRepoFailure("Unknown error"))
      );
  };
};

export const searchUser = query => {
  return dispatch => {
    dispatch(beginTask());
    dispatch(ActionCreators.search(query));
    fetch("https://api.github.com/search/users?q=" + query)
      .then(res => {
        if (res.status.toString().charAt(0) == 5 || !res) {
          dispatch(ActionCreators.searchFailure("Server error"));
          return;
        }
        res
          .json()
          .then(values => {
            dispatch(ActionCreators.searchSuccess(values));
            dispatch(endTask());
          })
          .catch(err =>
            dispatch(ActionCreators.searchFailure("Loading data failure"))
          );
      })
      .catch(err => dispatch(ActionCreators.searchFailure("Unknown error")));
  };
};
