import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./index.css";

const authLink = setContext((_, { headers }) => {
  return {
    headers: { ...headers },
  };
});

const httpLink = createHttpLink({
  uri: "https://graphql-pokemon2.vercel.app/",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
