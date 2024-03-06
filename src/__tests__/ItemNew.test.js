import { render, screen } from "@testing-library/react"
import ItemNew from "../pages/ItemNew"
import { BrowserRouter } from "react-router-dom"



describe("<ItemNew />", () => {
  it("renders a new collectible", () => {
    render(
        <BrowserRouter>
          <ItemNew createCollectible={()=>{}}/>
        </BrowserRouter>
    )
    const itemNew = screen.getByText(/you need to sign in to create a new collectible\./i)
    expect(itemNew).toBeInTheDocument()
  })
})
