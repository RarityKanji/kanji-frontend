import { render, screen } from '@testing-library/react';
import AboutUs from '../pages/AboutUs';
import { BrowserRouter } from 'react-router-dom'


describe("<AboutUs />", () => {
  it("renders an AboutUs", () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    //screen.logTestingPlaygroundURL()
    const happyEnding = screen.getByRole("heading", { name: /about us/i })
    expect(happyEnding).toBeInTheDocument()

  })
})