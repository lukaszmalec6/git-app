import { combineReducers } from "redux";
import UsersReducer from "./Users";
import UserReducer from "./User";
import RepoReducer from "./Repositories";
const reducers = combineReducers({
  users: UsersReducer,
  user: UserReducer,
  repositories: RepoReducer
});

export default reducers;
