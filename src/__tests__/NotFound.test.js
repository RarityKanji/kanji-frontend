import { render, screen } from "@testing-library/react"
import NotFound from "../pages/NotFound"
import { BrowserRouter } from "react-router-dom"

describe("<NotFound />", () => {
  it("renders one collectibles", () => {
    render(
      <BrowserRouter>
       <NotFound/>
      </BrowserRouter>
    )
    const notFound = screen.getByRole('heading', {
      name: /ahoy! this map leads you uncharted territories/i
    })
    expect(notFound).toBeInTheDocument()
  })
})