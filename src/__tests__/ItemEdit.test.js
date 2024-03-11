import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import ItemEdit from "../pages/ItemEdit"
import mockCollectibles from  "../pages/mockCollectibles.js"

describe("<ItemEdit />", () => {
  it("renders a form for editing a cat's information", () => {
    render(
      <BrowserRouter>
        <ItemEdit cats={mockCollectibles} updateCat={() => {}} />
      </BrowserRouter>
    )
    const itemName = screen.getByText(/name/i)
    expect(itemName).toBeInTheDocument()

    const itemPrice = screen.getByText(/price/i)
    expect(itemPrice).toBeInTheDocument()

    const itemImage = screen.getByText(/image url/i)
    expect(itemImage).toBeInTheDocument()

    const itemDescription = screen.getByText(/description/i)
    expect(itemDescription).toBeInTheDocument()

    const itemCondition =screen.getByText(/condition/i)
    expect(itemCondition).toBeInTheDocument()

    const itemAuthenticity = screen.getByText(/authenticity/i)
    expect(itemAuthenticity).toBeInTheDocument()

    const itemCategory= screen.getByText(/category/i)
    expect(itemCategory).toBeInTheDocument()

    const itemSubmit= screen.getByRole('button', {
        name: /submit your edit collectible/i
      })
    expect(itemSubmit).toBeInTheDocument()
  })
})