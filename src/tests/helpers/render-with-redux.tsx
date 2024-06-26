import { ReactElement } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import { store } from "../../store";

const renderWithRedix = (component: ReactElement) => {
  return render(<Provider store={store}>{component}</Provider>);
};

export default renderWithRedix;
