import { render, screen } from "@testing-library/react"
import ItemShow from "../pages/ItemShow"
import { MemoryRouter, Routes, Route} from "react-router-dom"
import mockCollectibles from "../pages/mockCollectibles"


describe("<ItemShow />", () => {
  it("renders one collectibles", () => {
    render(
      <MemoryRouter initialEntries={["/items/1"]}>
        <Routes>
          <Route path="/items/:itemId" element={<ItemShow collectibles = {mockCollectibles} />} />
        </Routes>
      </MemoryRouter>
    )
    const itemShow = screen.getByText(/loading item details\.\.\./i)
    expect(itemShow).toBeInTheDocument()
  })
})

