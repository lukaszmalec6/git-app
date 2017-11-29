import * as types from "./Types";

export const fetchGitUsers = since => {
  return {
    type: types.FETCH_GIT_USERS,
    since
  };
};

export const fetchGitUsersSuccess = (data, next) => {
  return {
    type: types.FETCH_GIT_USERS_SUCCESS,
    data,
    next
  };
};

export const fetchGitUsersFailure = () => {
  return {
    type: types.FETCH_GIT_USERS_FAILURE
  };
};

export const fetchSingleUser = () => {
  return {
    type: types.FETCH_SINGLE_USER
  };
};

export const fetchSingleUserSuccess = data => {
  return {
    type: types.FETCH_SINGLE_USER_SUCCESS,
    data
  };
};

export const fetchSingleUserFailure = () => {
  return {
    type: types.FETCH_SINGLE_USER_FAILURE
  };
};
export const fetchUserRepo = () => {
  return {
    type: types.FETCH_USER_REPO
  };
};

export const fetchUserRepoSuccess = data => {
  return {
    type: types.FETCH_USER_REPO_SUCCESS,
    data
  };
};

export const fetchUserRepoFailure = () => {
  return {
    type: types.FETCH_USER_REPO_FAILURE
  };
};
