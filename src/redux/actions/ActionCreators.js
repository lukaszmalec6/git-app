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

export const fetchGitUsersFailure = error => {
  return {
    type: types.FETCH_GIT_USERS_FAILURE,
    error
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

export const fetchSingleUserFailure = error => {
  return {
    type: types.FETCH_SINGLE_USER_FAILURE,
    error
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

export const fetchUserRepoFailure = error => {
  return {
    type: types.FETCH_USER_REPO_FAILURE,
    error
  };
};

export const search = query => {
  return {
    type: types.SEARCH,
    query
  };
};

export const searchFailure = error => {
  console.log(error);
  return {
    type: types.SEARCH_FAILURE,
    error
  };
};

export const searchSuccess = data => {
  return {
    type: types.SEARCH_SUCCESS,
    data
  };
};
