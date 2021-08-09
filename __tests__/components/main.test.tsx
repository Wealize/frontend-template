import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";
import Main from "../../src/components/main";

describe("<Main />", () => {
  it("renders a main component", () => {
    render(<Main />);

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
