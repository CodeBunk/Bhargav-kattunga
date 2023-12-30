import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  concat,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Provider } from "react-redux";
import { store, persistor } from "./Store";
import toast, { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/lib/integration/react";

const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      if (message.includes("BEARER_EXPIRED")) {
        store.dispatch({
          type: "openModal",
        });
      } else toast.error(message);
    });
  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Toaster position="bottom-center" gutter={56} />
      <App />
    </PersistGate>
  </Provider>
);
