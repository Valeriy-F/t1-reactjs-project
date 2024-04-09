import { ReactElement } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Routing from "../../app/app-routing";
import { store } from "../../store";

const renderApp = (component: ReactElement, initialRoutes: string[] = ["/"]) => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={initialRoutes}>
        <Routing />
        {component}
      </MemoryRouter>
    </Provider>
  );
};

export default renderApp;
