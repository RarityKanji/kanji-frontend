import { render, screen } from "@testing-library/react"
import SignIn from "../pages/SignIn"
import { BrowserRouter } from "react-router-dom"

describe("<SignIn />", () => {
  it("renders sign in text", () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    )
    const textBox = screen.getByRole("heading", {
      name: /sign in/i,
    })
    expect(textBox).toBeInTheDocument()
  })

  it("renders sign in button", () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    )
    const button = screen.getByRole("link", {
      name: /sign up/i,
    })
    expect(button).toBeInTheDocument()
  })
})
