import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { nprogressMiddleware } from "redux-nprogress";
export const configureStore = () => {
  let store = createStore(
    rootReducer,
    applyMiddleware(thunk, nprogressMiddleware())
  );
  return store;
};
export default configureStore;
