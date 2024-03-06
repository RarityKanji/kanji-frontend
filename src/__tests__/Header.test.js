import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom'


describe("<Header />", () => {
  it("renders an heading", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
     const welcomeHeader = screen.getByText(/classes/i)
    expect(welcomeHeader).toBeInTheDocument()
  })
})
