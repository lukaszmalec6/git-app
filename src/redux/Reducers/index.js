import { combineReducers } from "redux";
import UsersReducer from "./Users";
import UserReducer from "./User";
import RepoReducer from "./Repositories";
import SearchReducer from "./Search";
import { nprogress } from "redux-nprogress";
const reducers = combineReducers({
  search: SearchReducer,
  users: UsersReducer,
  user: UserReducer,
  repositories: RepoReducer,
  nprogress
});

export default reducers;
