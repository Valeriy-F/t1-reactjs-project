import { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

const renderWithRouter = (component: ReactElement, initialRoutes: string[] = ["/"]) => {
  return render(<MemoryRouter initialEntries={initialRoutes}>{component}</MemoryRouter>);
};

export default renderWithRouter;
