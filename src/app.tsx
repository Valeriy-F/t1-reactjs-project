import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Routing from "./routing";
import { store } from "./store";

import "./styles/app.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routing />
      </Router>
    </Provider>
  );
}

export default App;
