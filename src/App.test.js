import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("<App />", () => {
  it("renders an App", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const app = screen.getByText(/Home/i);
    expect(app).toBeInTheDocument();
  });
});
