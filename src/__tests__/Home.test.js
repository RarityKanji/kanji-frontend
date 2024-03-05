import { render, screen } from '@testing-library/react';
import Home from '../pages/Home'
import { BrowserRouter } from 'react-router-dom'


describe("<Home />", () => {
  it("renders an heading", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    //screen.logTestingPlaygroundURL()
    const welcomeHeader = screen.getByRole("heading", { name: /the world's treasures made accessible to all/i })
    expect(welcomeHeader).toBeInTheDocument()

  })
})