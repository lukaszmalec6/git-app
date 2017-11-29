import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Reducers";
import thunk from "redux-thunk";

export const configureStore = () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};
export default configureStore;
