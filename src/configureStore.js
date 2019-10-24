import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import windowReducer from "./redux/reducers/windowReducer";
import contactsReducer from "./redux/reducers/contactsReducer";
import messagesReducer from "./redux/reducers/messagesReducer";
import openedMessageReducer from "./redux/reducers/openedMessageReducer";
import loginReducer from "./redux/reducers/LoginReducer";
import thunk from "redux-thunk";

const createRootReducers = combineReducers({
  window: windowReducer,
  contacts: contactsReducer,
  messages: messagesReducer,
  openedMessage: openedMessageReducer,
  loginData: loginReducer
});

const middlewares = [thunk];

const composeMiddlewares = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

if (process.env.NODE_ENV === "development") {
  const logger = createLogger();
  middlewares.push(logger);
}

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const configureStore = () =>
  createStore(createRootReducers, persistedState, composeMiddlewares);

export default configureStore;
