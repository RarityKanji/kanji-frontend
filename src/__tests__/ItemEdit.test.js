import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import ItemEdit from "../pages/ItemEdit"
import mockCollectibles from "../pages/mockCollectibles.js"

describe("<ItemEdit />", () => {
  it("renders a form for editing a cat's information", () => {
    render(
      <BrowserRouter>
        <ItemEdit cats={mockCollectibles} updateCat={() => {}} />
      </BrowserRouter>
    )
    const itemName = screen.getByLabelText(/name/i)
    expect(itemName).toBeInTheDocument()

    const itemPrice = screen.getByLabelText(/price/i)
    expect(itemPrice).toBeInTheDocument()

    const itemImage = screen.getByLabelText(/image url/i)
    expect(itemImage).toBeInTheDocument()

    const itemDescription = screen.getByLabelText(/description/i)
    expect(itemDescription).toBeInTheDocument()

    const itemCondition = screen.getByLabelText(/condition/i)
    expect(itemCondition).toBeInTheDocument()

    const itemAuthenticity = screen.getByLabelText(/authenticity/i)
    expect(itemAuthenticity).toBeInTheDocument()

    const itemCategory = screen.getByLabelText(/category/i)
    expect(itemCategory).toBeInTheDocument()

    const itemSubmit = screen.getByRole('button', {
        name: /edit collectible/i
      })
    expect(itemSubmit).toBeInTheDocument()
  })
})