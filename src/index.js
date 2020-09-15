import React from "react";
import { render } from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
