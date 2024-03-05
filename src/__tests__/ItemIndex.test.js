import { render, screen } from "@testing-library/react";
import ItemIndex from "../pages/ItemIndex";
import { BrowserRouter } from "react-router-dom";

describe("<ItemIndex />", () => {
  it("renders all collectibles", () => {
    render(
      <BrowserRouter>
        <ItemIndex />
      </BrowserRouter>
    );
    const itemIndex = screen.getByText(/Explore Rare Items/i);
    expect(itemIndex).toBeInTheDocument();
  });
});