import { screen } from "@testing-library/react";

import renderWithRouter from "../../../tests/helpers/render-with-router";

import NavMenu from "./nav-menu";

describe("NavMenu test", () => {
  test("NavMenu items should be rendered with appropriate title and url", () => {
    const navMenuItems = [
      { title: "page-1", url: "page-1-url" },
      { title: "page-2", url: "page-2-url" },
    ];

    renderWithRouter(<NavMenu items={navMenuItems} />);

    const navMenu = screen.queryByTestId("nav-menu");

    expect(navMenu).toBeInTheDocument();
    expect(navMenu).toMatchSnapshot();

    navMenuItems.forEach(({ title, url }) => {
      const link = screen.queryByRole("link", { name: title });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/${url}`);
    });
  });

  test("NavMenu contains logo link by default", () => {
    renderWithRouter(<NavMenu items={[]} />);

    const link = screen.queryByTestId("logo-link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
