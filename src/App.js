import React from "react";
import { Provider } from "react-redux";

import { initiateContacts } from "./redux/actions/ContactsActions";
import { initiateMessages } from "./redux/actions/MessagesActions";
import configureStore from "./configureStore";

import "./App.css";

import contacts from "./samples/contacts";
import messages from "./samples/messages";

import Routes from "./routes/Routes";

const store = configureStore();
store.dispatch(initiateContacts(contacts));
store.dispatch(initiateMessages(messages));

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
