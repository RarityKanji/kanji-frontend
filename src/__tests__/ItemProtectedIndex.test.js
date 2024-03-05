import React from "react"
import { render, screen } from "@testing-library/react"
import ItemProtectedIndex from "../pages/ItemProtectedIndex"
import { BrowserRouter } from "react-router-dom"

describe("ItemProtectedIndex component", () => {
  beforeEach(() => {
    const currentUser = {
      id: 1,
      email: "janet.doezer@gmail.com",
    }

    const mockCollectibles = [
      {
        id: 1,
        name: "Vintage Superman Comic",
        price: "570,000",
        image: "http://tinyurl.com/3zps2pnz",
        description: "A rare, mint condition Superman comic from 1938.",
        condition: "Mint",
        authenticity: "Certified",
        category: "Books",
        user_id: 1,
      },
    ]

    render(
      <BrowserRouter>
        <ItemProtectedIndex
          collectibles={mockCollectibles}
          currentUser={currentUser}
        />
      </BrowserRouter>
    )
  })

  it("renders the name", () => {
    const name = screen.getByText(/vintage superman comic/i)
    expect(name).toBeInTheDocument()
  })
})
