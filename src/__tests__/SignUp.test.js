import { render, screen } from "@testing-library/react"
import SignUp from "../pages/SignUp"
import { BrowserRouter } from "react-router-dom"

describe("<SignUp />", () => {
  it("renders sign up", () => {
    render(
      <BrowserRouter>
       <SignUp/>
      </BrowserRouter>
    )
    const textBox = screen.getByRole('textbox')
    expect(textBox).toBeInTheDocument()
    const passText = screen.getByPlaceholderText(/enter at least 8\+ characters/i)
    expect(passText).toBeInTheDocument()
  })
})