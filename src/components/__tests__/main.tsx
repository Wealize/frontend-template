import Main from "../main";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Main />", () => {
  it("renders a main component", () => {
    render(<Main />);

    const main = screen.getByText("Frontend template");

    expect(main).toBeInTheDocument();
  });
});
