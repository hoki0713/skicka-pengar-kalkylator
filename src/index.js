import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { KvittosContextProvider } from "./store/kvittos-context";

ReactDOM.render(
  <BrowserRouter>
    <KvittosContextProvider>
      <App />
    </KvittosContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
