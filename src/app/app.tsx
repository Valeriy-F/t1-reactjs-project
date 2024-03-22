import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "../store";

import Routing from "./app-routing";

import "./styles/app.css";

function App() {
  return (
    <Provider store={store}>
      <Router basename="/">
        <Routing />
      </Router>
    </Provider>
  );
}

export default App;
